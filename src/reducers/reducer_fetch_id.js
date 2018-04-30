import { FETCH_ID } from "../actions/index";

export default function (state = {}, action) {
  switch(action.type) {
    case FETCH_ID:
      const summonerName = action.payload.data.name.toString().toLowerCase();
      const newState = {...state};
      newState[summonerName] = action.payload.data;
      return newState;
    default:
      return state;
  }
}
