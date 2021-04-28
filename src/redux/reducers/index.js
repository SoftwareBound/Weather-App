import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";
import { weatherReducer } from "./weatherReducer";

export default combineReducers({ favoritesReducer, weatherReducer });
