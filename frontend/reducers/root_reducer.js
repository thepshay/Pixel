import { combineReducers } from "redux";

import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import cartItemErrorsReducer from "./cart_item_errors_reducer";
import libraryItemErrorsReducer from "./library_item_errors_reducer";
import reviewErrorsReducer from "./review_errors_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: sessionErrorsReducer,
  cartErrors: cartItemErrorsReducer,
  libraryErrors: libraryItemErrorsReducer,
  reviewErrors: reviewErrorsReducer,
  session: sessionReducer
});

export default rootReducer;