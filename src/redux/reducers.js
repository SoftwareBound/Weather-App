import { weatherActions, searchActions } from "../common/constants/actionType";
import { defaultCityDetails } from "../common/constants/titles";

export function weatherReducer(state = {}, action) {
  switch (action.type) {
    case weatherActions.LOAD_CITY_WEATHER:
      console.log(weatherActions.LOAD_CITY_WEATHER);
      return action.payload;
    case weatherActions.LOAD_CITY_WEATHER_FORECAST:
      console.log(weatherActions.LOAD_CITY_WEATHER_FORECAST);

      return { ...state, forecast: action.payload };
    case searchActions.SET_SELECTED_CITY_FROM_SEARCH:
      console.log(searchActions.SET_SELECTED_CITY_FROM_SEARCH);
      return {
        ...state,
        cityDetails: { name: action.payload.name, id: action.payload.key },
      };
    case "test1":
      console.log(state);
      return state;
    default:
      console.log("default state");
      return state;
  }
}

/* cityDetails: {
  name: defaultCityDetails.DEFAULT_CITY_NAME,
  id: defaultCityDetails.DEFAULT_CITY_ID,
} */
