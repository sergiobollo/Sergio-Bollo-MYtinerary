const initialState = {
    itineraries: []
}

const ItinerariesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_ITINERARIES':
            return {...state, itineraries: action.payload};
        default:
            return state
    }
}

export default ItinerariesReducer
