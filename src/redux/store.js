import { createStore } from "redux";
import { weatherReducer } from "./reducers";

export const store = createStore(weatherReducer);
