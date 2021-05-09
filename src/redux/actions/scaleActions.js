import { scaleActions } from "../../common/constants/actionType";

export function changeDegreeScale() {
  return {
    type: scaleActions.CHANGE_DEGREE_SCALE,
  };
}
