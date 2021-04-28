import { favoritesActions } from "../../common/constants/actionType";

export function addFavouriteCity(city) {
  return {
    type: favoritesActions.ADD_CITY_TO_FAVORITES,
    payload: {
      id: city.cityDetails.id,
      name: city.cityDetails.name,
      currentWeather: city.currentWeather,
    },
  };
}

export function removeFavouriteCity(cityList) {
  return {
    type: favoritesActions.REMOVE_CITY_FROM_FAVORITES,
    payload: cityList,
  };
}
