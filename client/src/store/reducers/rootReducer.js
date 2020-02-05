import { combineReducers } from "redux";
import FilterCitiesReducer from "./citiesReducer";
import FilterFormReducer from "./FilterFormReducer";
import ItinerariesReducer from "./itineraryReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({ cities: FilterCitiesReducer, cityFilter: FilterFormReducer, itineraries: ItinerariesReducer, user: usersReducer });

export default rootReducer;
