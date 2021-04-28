import { favoritesActions } from "../../common/constants/actionType";

export function favoritesReducer(state = [], action) {
  switch (action.type) {
    case favoritesActions.ADD_CITY_TO_FAVORITES:
      return [...state, action.payload];
    case favoritesActions.REMOVE_CITY_FROM_FAVORITES:
      return action.payload;
    default:
      return state;
  }
}
