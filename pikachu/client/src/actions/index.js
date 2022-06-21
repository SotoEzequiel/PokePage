

export  function getPokemons(){
    return async  function (dispatch){
     return fetch("http://localhost:3001/pokemons")
     .then((response)=>response.json())
     .then(json=>{
         return dispatch({type:"OBTENER_POKE", payload: json})
     }).catch((error)=>{
        return "El error en el actions es: "+error
     })
        
    }  
}

export function filtrarPokemonTipo(payload){
    console.log(payload)
    return{
        type:"FILTRAR_TIPO",
        payload:payload
    }
}
// export  function getMovies(titulo){
//     return function(dispatch) {
//         return fetch("http://www.omdbapi.com/?apikey="+API_KEY+"&s=" + titulo)
//           .then(response => response.json())
//           .then(json => {
//             return dispatch({ type: "GET_MOVIES", payload: json });
//           });
//       };
// }