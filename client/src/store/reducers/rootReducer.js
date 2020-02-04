import { combineReducers } from "redux";
import FilterCitiesReducer from "./citiesReducer";
import FilterFormReducer from "./FilterFormReducer";

const rootReducer = combineReducers({ cities: FilterCitiesReducer, cityFilter: FilterFormReducer });

export default rootReducer;