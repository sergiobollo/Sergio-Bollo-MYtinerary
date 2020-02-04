const initialState = {
    itineraries: []
}

const ItinerariesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LISTAR_ITINERARIOS':
            return {...state, itineraries: action.payload};
        default:
            return state
    }
}

export default ItinerariesReducer
