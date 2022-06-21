import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import {filtrarPokemonTipo, getPokemons} from "../actions/index.js";
import Card from "./Card.jsx";
import Paginado from "./Paginado.jsx"

export default function Home() {
    
    const dispatch = useDispatch();
    const stateRedux=useSelector((state)=>state)
    

    const [currentPage,setCurrentPage]=useState(1)
    const [pokemonPorPage,setPokemonPorPage]=useState(6)
    const indexOfLastPokemon=currentPage*pokemonPorPage;
    const indexOfFirstPokemon=indexOfLastPokemon - pokemonPorPage;
    const currentPokemons= stateRedux&&stateRedux.pokemons.slice(indexOfFirstPokemon,indexOfLastPokemon)

    const paginado=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }


    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])


    function handleClick(e){
        e.preventDefault() 
        dispatch(getPokemons())
        console.log(stateRedux)
    }

    function handleFilterTipo(e){
        dispatch(filtrarPokemonTipo(e.target.value))
    }



    let cargando="Loading..."
    
    return(
        <div>
            <button onClick={e=>{handleClick(e)}}>REFRESH</button>
            <div>
                <Link to="/crear">Crear personaje</Link>
            </div>
            <div>
                <div>
                    <h4>Ordenamiento por nombre</h4>
                    <select>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Decendente</option>
                    </select>
                </div>
                <div>
                    <h4>Ordenamiento por tipo</h4>
                    <select>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Decendente</option>
                    </select>
                </div>
                <div>
                    <h4>Tipos de pokemon</h4>
                    <select onChange={(e)=>handleFilterTipo(e)}>
                        <option value="all">All</option>
                        <option value="normal">Normal</option>
                        <option value="poison">Poison</option>
                        <option value="ground">Ground</option>
                        <option value="fighting">Fighting</option>
                        <option value="bug">Bug</option>
                        <option value="ghost">Ghost</option>
                        <option value="rock">Rock</option>
                        <option value="steel">Steel</option>
                        <option value="fire">Fire</option>
                        <option value="electric">Electric</option>
                        <option value="grass">Grass</option>
                        <option value="psychic">Psychic</option>
                        <option value="ice">Ice</option>
                        <option value="dragon">Dragon</option>
                        <option value="water">Water</option>
                        <option value="dark">Dark</option>
                        <option value="fairy">Fairy</option>
                        <option value="flying">Flying</option>
                    </select> 
                </div>
                <div>
                    <h4>Creado o Existente</h4>
                    <select>
                        <option value="all">All</option>
                        <option value="creado">Creado</option>
                        <option value="existente">Existente</option>
                    </select>
                </div>
            </div>
            <div>
                <Paginado 
                    pokemonsPorPage={pokemonPorPage}
                    allPokemons={stateRedux&&stateRedux.pokemons.length}
                    paginado={paginado}
                />
            </div>
            <div>
            {currentPokemons && currentPokemons.map((a)=>{
                    return(
                        <div key={a.id}>
                        <Link to={"/Pokemons/"+a.id}>
                            <Card  name={a.name} img={a.img} tipo={a.tipo} />
                        </Link>

                        </div>
                    )
                })
            }
            </div>
            <div>
                <Paginado 
                    pokemonsPorPage={pokemonPorPage}
                    allPokemons={stateRedux&&stateRedux.pokemons.length}
                    paginado={paginado}
                />
            </div>
        </div>
    )
}