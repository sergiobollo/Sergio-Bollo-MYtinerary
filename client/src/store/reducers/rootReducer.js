import { combineReducers } from "redux";
import FilterCitiesReducer from "./citiesReducer";
import FilterFormReducer from "./FilterFormReducer";
import ItinerariesReducer from "itineraryReducer";

const rootReducer = combineReducers({ cities: FilterCitiesReducer, cityFilter: FilterFormReducer, itineraries: ItinerariesReducer });

export default rootReducer;
