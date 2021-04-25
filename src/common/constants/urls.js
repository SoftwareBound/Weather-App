import { apiKeys } from "./api";

export const iconUrls = {
  WEATHER_URL_PREFIX: "https://developer.accuweather.com/sites/default/files/",
  WEATHER_URL_SUFFIX: "-s.png",
};
export const cityUrls = {
  DEFAULT_CITY_WEATHER_ID: "215854",
};
export const weatherUrls = {
  CITY_CURRENT_WEATHER: ` http://dataservice.accuweather.com/currentconditions/v1/`,
  CITY_FIVE_DAY_FORECAST:
    "http://dataservice.accuweather.com/forecasts/v1/daily/5day/",
  APIKEY_SUFFIX_URL: `?apikey=${apiKeys.WEATHER_APIKEY}`,
};
