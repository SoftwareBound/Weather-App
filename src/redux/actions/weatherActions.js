import {
  searchActions,
  weatherActions,
} from "../../common/constants/actionType";

export function setSelectedCityData(key, name) {
  return {
    type: searchActions.SET_SELECTED_CITY_FROM_SEARCH,
    payload: { name, key },
  };
}
