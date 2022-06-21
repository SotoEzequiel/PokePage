const initialState={
}

function rootReducer(state=initialState,action) {
    switch (action.type) {
        case "OBTENER_POKE":
            return{
                ...state,
                pokemons:action.payload
            }
        case "FILTRAR_TIPO":
            const bichos=state.pokemons
            const bichosFiltro=action.payload==="all"?bichos:bichos.filter((a)=>a.tipo[0]===action.payload || a.tipo[1]==action.payload)
            return{
                ...state,
                pokemons:bichosFiltro
            }

            break;
    
        default:
            break;
    }
}

export default rootReducer