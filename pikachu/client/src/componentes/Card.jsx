import React from "react";

export default function Card(pokemon){
    return(
        <div key={pokemon.id}>
            <img src={pokemon.img}/>
            <h3>{pokemon.name} </h3>
            <h4>{pokemon.tipo} </h4>
        </div>
    );
}