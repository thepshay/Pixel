import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const rootReducer = combineReducers({
  errors: sessionErrorsReducer,
  session: sessionReducer
});

export default rootReducer;