import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";
import { weatherReducer } from "./weatherReducer";
import { scaleReducer } from "./scaleReducer";

export default combineReducers({
  favoritesReducer,
  weatherReducer,
  scaleReducer,
});
