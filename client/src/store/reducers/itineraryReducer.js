const initialState = {
    itineraries: [],
    url: []
}

const ItinerariesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LISTAR_ITINERARIOS':
            return {...state, itineraries: action.payload };
        case 'FILTER_ITINERARIES':
            return {...state, url: "http://localhost:5000/itineraries/" + action.payload };
        default:
            return state
    }
}

export default ItinerariesReducer