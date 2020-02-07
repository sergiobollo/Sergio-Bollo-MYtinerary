import { combineReducers } from "redux";
import FilterCitiesReducer from "./citiesReducer";
import FilterFormReducer from "./FilterFormReducer";
import ItinerariesReducer from "./itineraryReducer";
import usersReducer from "./usersReducer";
import registerReducer from "./registerReducer";

const rootReducer = combineReducers({ cities: FilterCitiesReducer, cityFilter: FilterFormReducer, itineraries: ItinerariesReducer, user: usersReducer, token: registerReducer });

export default rootReducer;
