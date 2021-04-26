import { searchActions } from "../common/constants/actionType";
import { getData } from "../common/functions/getDataFromApi";

export function setSelectedCityData(key, name) {
  return {
    type: searchActions.SET_SELECTED_CITY_FROM_SEARCH,
    payload: { name, key },
  };
}
