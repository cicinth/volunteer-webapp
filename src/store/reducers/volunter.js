import { SET_VOLUNTER_DATA } from "../actions/volunter";

const INITIAL_STATE = {};

export default function Volunter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_VOLUNTER_DATA:
      return {
        ...action.data,
      };
    default:
      return state;
  }
}
