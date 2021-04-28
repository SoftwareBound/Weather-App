import { weatherActions } from "../../common/constants/actionType";

export function weatherReducer(state = {}, action) {
  switch (action.type) {
    case weatherActions.LOAD_CITY_WEATHER:
      return {
        ...state,
        cityDetails: action.payload.cityDetails,
        currentWeather: action.payload.currentWeather,
      };

    case weatherActions.LOAD_CITY_WEATHER_FORECAST:
      return { ...state, forecast: action.payload };

    default:
      return state;
  }
}
