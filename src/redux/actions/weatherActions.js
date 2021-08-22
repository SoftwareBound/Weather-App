import {
  searchActions,
  weatherActions,
} from "../../common/constants/actionType";
import { getData } from "../../common/functions/getDataFromApi";
import { weatherUrls, apiKeyUrls } from "../../common/constants/urls";
/* import { defaultCityDetails } from "../../common/constants/titles"; for testing reasons*/

export function setSelectedCityData(key, name) {
  return {
    type: searchActions.SET_SELECTED_CITY_FROM_SEARCH,
    payload: { name, key },
  };
}
export function loadCityWeather(id, name, country, data) {
  return {
    type: weatherActions.LOAD_CITY_WEATHER,
    payload: {
      cityDetails: {
        name: name,
        id: id,
        country: country,
      },
      currentWeather: data,
    },
  };
}
export function loadCityForecast(data) {
  return {
    type: weatherActions.LOAD_CITY_WEATHER_FORECAST,
    payload: data,
  };
}

export function loadCurrentCityWeather(id, name, country) {
  return async function (dispatch) {
    const currentCityWeather = await getData(
      `${weatherUrls.CITY_CURRENT_WEATHER}${id}${apiKeyUrls.APIKEY_URL}`
    );

    dispatch(loadCityWeather(id, name, country, currentCityWeather[0]));
    const currentCityForecast = await getData(
      `${weatherUrls.CITY_FIVE_DAY_FORECAST}${id}${apiKeyUrls.APIKEY_URL}`
    );
    return dispatch(loadCityForecast(currentCityForecast));
  };
}
