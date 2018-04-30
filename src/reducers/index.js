import { combineReducers } from "redux";
import FetchIdReducer from "./reducer_fetch_id";

const rootReducer = combineReducers({
  ids: FetchIdReducer
});

export default rootReducer;
