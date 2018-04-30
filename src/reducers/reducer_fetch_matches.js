import { FETCH_MATCHES } from "../actions/index";

export default function(state = {}, action) {
  switch(action) {
    case FETCH_MATCHES:
      newState = {...state};
      return newState;
  }
}
