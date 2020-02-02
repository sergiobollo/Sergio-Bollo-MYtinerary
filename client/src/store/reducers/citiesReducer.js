const initialState = {

}

const FilterCitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LISTAR__USUARIOS':
            return {...state, ...action.payload };
            /* case 'FILTER_CITIES':
                 return {...state,
                     filteredCities: state.cities.filter((city) => {
                         let cityName = city.name.toLowerCase()
                         return cityName.indexOf(
                             action.payload.toLowerCase()) !== -1
                     })
                 };*/
        default:
            return state
    }
}

export default FilterCitiesReducer