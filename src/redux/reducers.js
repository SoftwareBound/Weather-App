import { weatherActions } from "../common/constants/actionType";

export function weatherReducer(state = {}, action) {
  switch (action.type) {
    case weatherActions.LOAD_DEFAULT_CITY_WAETHER:
      console.log(state);
      return action.payload;
    case "test1":
      console.log(state);
      return state;
    default:
      return state;
  }
}
