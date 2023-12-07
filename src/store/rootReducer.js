import { combineReducers } from "redux";
import user from "./auth/userSlice";
import session from "./auth/sessionslice";
const rootReducer = combineReducers({
  user,
  session,
});

export default rootReducer;
