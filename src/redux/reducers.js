import { initialCityWeather } from "./initialState";
export function weatherReducer(state = {}, action) {
  switch (action.type) {
    case "test":
      console.log(state);
      return state;

    default:
      console.log("this is a default case");
      return state;
  }
}
