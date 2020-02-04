import { combineReducers } from "redux";
import FilterCitiesReducer from "./citiesReducer";

const rootReducer = combineReducers({ cities: FilterCitiesReducer });

export default rootReducer;