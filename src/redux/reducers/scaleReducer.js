import { scaleActions } from "../../common/constants/actionType";

export function scaleReducer(state = "C", action) {
  switch (action.type) {
    case scaleActions.CHANGE_DEGREE_SCALE:
      if (state === "C") {
        return "F";
      } else {
        return "C";
      }
    default:
      return state;
  }
}
