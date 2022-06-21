const { default: axios } = require('axios');
const { Router } = require('express');
const funciones=require("../routes/funciones.js")
const {Pokemon,Tipo} = require("../db")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons",async(req,res)=>{

    const name=req.query.name;
    if (name) {
        try {
           bicho= await funciones.OBTENER_POKEMON(name)
            return res.status(200).send(bicho)
       } catch (error) {
            return res.status(404).send("no se encontro el pokemon")
       }
    }
    try {
        var poke=await funciones.OBTENER_POKEMOS_API()
        
        return res.status(200).json(poke);
        
    } catch (error) {
        res.status(400).send("error en index del back end :"+error)
    }
   
})


// GET https://pokeapi.co/api/v2/pokemon
// GET https://pokeapi.co/api/v2/pokemon/{id}
// GET https://pokeapi.co/api/v2/pokemon/{name}
// GET https://pokeapi.co/api/v2/type

router.get("/pokemons/:id",async(req,res)=>{
    
        const id=req.params.id;
        let pokemon=await funciones.OBTENER_UN_POKEMON_API(id)
        if(pokemon.message!=="Request failed with status code 404"){
            res.status(200).json(pokemon)

       }else res.send({error:"no existe un pokemon con ese id ",pkm:pokemon})
    
})

router.get("/types",async(req,res)=>{
    try {
        var tipos=await funciones.OBTENER_TYPES()
        res.send(tipos)
    } catch (error) {
        res.send("error al obtener los tipos de pokemon")
    }
})

router.post("/pokemons", async (req,res)=>{
    
    try {
        let {
            name,
            vida,
            ataque,
            defensa,
            velocidad,
            altura,
            peso,
            img,
            tipo,
            basededatos,
    
        } = req.body;
        // if (!name || !vida || !ataque || !defensa || !velocidad || !altura || !peso || !img || !tipo || !basededatos) return res.send("datos pasados INCORRECTAMENTE")
        
        let PokemonCreate= await Pokemon.create({
            name,
            vida,
            ataque,
            defensa,
            velocidad,
            altura,
            peso,
            img,
            basededatos
        })
        let TipoCreate=await Tipo.findAll({ where: {name : tipo}
        })
        PokemonCreate.addTipo(TipoCreate);
    
         return res.send("POKEMON CREADO");
    } catch (error) {
        res.status(400).send("error al crear el pokemon: "+error)
    }



})


module.exports = router;
