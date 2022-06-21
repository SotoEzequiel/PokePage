const axios=require("axios");
const e = require("express");

const {Pokemon,Tipo} =require("../db") 


//OBTENER LOS 40 POKEMONS
const OBTENER_POKEMOS_API =async ()=>{

    
        
        var array=[];
        var poke1=await axios.get("https://pokeapi.co/api/v2/pokemon/"+1)
        array.push(poke1.data)
        var poke2=await axios.get("https://pokeapi.co/api/v2/pokemon/"+2)
        array.push(poke2.data)
        var poke3=await axios.get("https://pokeapi.co/api/v2/pokemon/"+3)
        array.push(poke3.data)
        var poke4=await axios.get("https://pokeapi.co/api/v2/pokemon/"+4)
        array.push(poke4.data)
        var poke5=await axios.get("https://pokeapi.co/api/v2/pokemon/"+5)
        array.push(poke5.data)
        var poke6=await axios.get("https://pokeapi.co/api/v2/pokemon/"+6)
        array.push(poke6.data)
        var poke7=await axios.get("https://pokeapi.co/api/v2/pokemon/"+7)
        array.push(poke7.data)
        var poke8=await axios.get("https://pokeapi.co/api/v2/pokemon/"+8)
        array.push(poke8.data)
        var poke9=await axios.get("https://pokeapi.co/api/v2/pokemon/"+9)
        array.push(poke9.data)
        var poke10=await axios.get("https://pokeapi.co/api/v2/pokemon/"+10)
        array.push(poke10.data)
        var poke11=await axios.get("https://pokeapi.co/api/v2/pokemon/"+11)
        array.push(poke11.data)
        var poke12=await axios.get("https://pokeapi.co/api/v2/pokemon/"+12)
        array.push(poke12.data)
        var poke13=await axios.get("https://pokeapi.co/api/v2/pokemon/"+13)
        array.push(poke13.data)
        var poke14=await axios.get("https://pokeapi.co/api/v2/pokemon/"+14)
        array.push(poke14.data)
        var poke15=await axios.get("https://pokeapi.co/api/v2/pokemon/"+15)
        array.push(poke15.data)
        var poke16=await axios.get("https://pokeapi.co/api/v2/pokemon/"+16)
        array.push(poke16.data)
        var poke17=await axios.get("https://pokeapi.co/api/v2/pokemon/"+17)
        array.push(poke17.data)
        var poke18=await axios.get("https://pokeapi.co/api/v2/pokemon/"+18)
        array.push(poke18.data)
        var poke19=await axios.get("https://pokeapi.co/api/v2/pokemon/"+19)
        array.push(poke19.data)
        var poke20=await axios.get("https://pokeapi.co/api/v2/pokemon/"+20)
        array.push(poke20.data)
        var poke21=await axios.get("https://pokeapi.co/api/v2/pokemon/"+21)
        array.push(poke21.data)
        var poke22=await axios.get("https://pokeapi.co/api/v2/pokemon/"+22)
        array.push(poke22.data)
        var poke23=await axios.get("https://pokeapi.co/api/v2/pokemon/"+23)
        array.push(poke23.data)
        var poke24=await axios.get("https://pokeapi.co/api/v2/pokemon/"+24)
        array.push(poke24.data)
        var poke25=await axios.get("https://pokeapi.co/api/v2/pokemon/"+25)
        array.push(poke25.data)
        var poke26=await axios.get("https://pokeapi.co/api/v2/pokemon/"+26)
        array.push(poke26.data)
        var poke27=await axios.get("https://pokeapi.co/api/v2/pokemon/"+27)
        array.push(poke27.data)
        var poke28=await axios.get("https://pokeapi.co/api/v2/pokemon/"+28)
        array.push(poke28.data)
        var poke29=await axios.get("https://pokeapi.co/api/v2/pokemon/"+29)
        array.push(poke29.data)
        var poke30=await axios.get("https://pokeapi.co/api/v2/pokemon/"+30)
        array.push(poke30.data)
        var poke31=await axios.get("https://pokeapi.co/api/v2/pokemon/"+31)
        array.push(poke31.data)
        var poke32=await axios.get("https://pokeapi.co/api/v2/pokemon/"+32)
        array.push(poke32.data)
        var poke33=await axios.get("https://pokeapi.co/api/v2/pokemon/"+33)
        array.push(poke33.data)
        var poke34=await axios.get("https://pokeapi.co/api/v2/pokemon/"+34)
        array.push(poke34.data)
        var poke35=await axios.get("https://pokeapi.co/api/v2/pokemon/"+35)
        array.push(poke35.data)
        var poke36=await axios.get("https://pokeapi.co/api/v2/pokemon/"+36)
        array.push(poke36.data)
        var poke37=await axios.get("https://pokeapi.co/api/v2/pokemon/"+37)
        array.push(poke37.data)
        var poke38=await axios.get("https://pokeapi.co/api/v2/pokemon/"+38)
        array.push(poke38.data)
        var poke39=await axios.get("https://pokeapi.co/api/v2/pokemon/"+39)
        array.push(poke39.data)
        var poke40=await axios.get("https://pokeapi.co/api/v2/pokemon/"+40)
        array.push(poke40.data)
        
        let api=[]
       
    
        for (let i = 0; i < array.length; i++) {
            api.push({
                name: array[i].name,
                vida: array[i].stats[0].base_stat,
                ataque: array[i].stats[1].base_stat,
                defensa: array[i].stats[2].base_stat,
                velociad: array[i].stats[5].base_stat,
                altura: array[i].height,
                peso: array[i].weight,
                img: array[i].sprites.other.dream_world.front_default,
                id: array[i].id,
                tipo:[array[i].types[0].type.name,array[i].types[1]&&array[i].types[1].type.name],
             })
        }
    
    
            let database=await Pokemon.findAll({
                include:{
                    model:Tipo,
                    attributes:["name"],
                    through:{
                        attributes:[],
                    }
                }
    })
    
            let returno=api.concat(database)
    
           
         return returno
    
}


//OBTENER UN POKEMON POR ID
const OBTENER_UN_POKEMON_API=async (id)=>{
    
     try {
        var api = await axios.get("https://pokeapi.co/api/v2/pokemon/"+id)
        let pkm={
           name: api.data.name,
           vida: api.data.stats[0].base_stat,
           ataque: api.data.stats[1].base_stat,
           defensa: api.data.stats[2].base_stat,
           velociad: api.data.stats[5].base_stat,
           altura: api.data.height,
           peso:api.data.weight,
           img:api.data.sprites.other.dream_world.front_default,
           id: api.data.id
        }

        
        
        if(pkm.name!==null)return pkm
        
        
     } catch (error) {
         
        return error
     }
    

}


//OBTENER TIPOS API
const OBTENER_TYPES=async ()=>{
    let api=await axios.get('https://pokeapi.co/api/v2/type')
    
    let array=[]
    for (let i = 0; i < api.data.results.length; i++) {
        array.push(api.data.results[i].name)
        
    }
   
    array.forEach(e => {
        Tipo.findOrCreate({
            where:{ name: e }
        })
    });

    let tiposbd=await Tipo.findAll();
    return tiposbd

}



const OBTENER_POKEMON=async(name)=>{
    
        try {
            let json=await axios.get("https://pokeapi.co/api/v2/pokemon/"+name)
            let api=json.data
            let pokemon= {
                name: api.name,
                vida: api.stats[0].base_stat,
                ataque: api.stats[1].base_stat,
                defensa: api.stats[2].base_stat,
                velociad: api.stats[5].base_stat,
                altura: api.height,
                peso: api.weight,
                img: api.sprites.other.dream_world.front_default,
                id: api.id,
                tipo: api.types[0].type.name,
                tipo2: api.types[1]&&api.types[1].type.name,
                tipo3: api.types[2]&&api.types[2].type.name,
            }
                           
                
                return pokemon
            
        } catch (error) {
            return "error al obtener el pokemon : ",error
        }
}


module.exports={
    OBTENER_POKEMOS_API,
    OBTENER_UN_POKEMON_API,
    OBTENER_TYPES,
    OBTENER_POKEMON
}





