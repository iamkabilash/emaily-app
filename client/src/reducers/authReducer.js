import { FETCH_USER } from "../actions/types";

export default function authReducer(state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      console.log(action.payload);
      return action.payload || false;
    default:
      return state;
  }
}
