import React from "react";



export default function Paginado({pokemonsPorPage,allPokemons,paginado}) {
    
    let pageNumber=[]

    for (let i = 0; i < Math.ceil(allPokemons/pokemonsPorPage); i++) {
        pageNumber.push(i+1)
        
    }

    return(
        <nav>
            <ul>
                {pageNumber &&
                pageNumber.map((n)=>(
                    <li key={n}>
                        <a onClick={()=>paginado(n)}>{n}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}