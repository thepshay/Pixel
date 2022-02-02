import { combineReducers } from "redux";
import cartItemReducer from "./cart_item_reducer";

import gameReducer from "./game_reducer";
import genreReducer from "./genre_reducer";
import libraryItemReducer from "./library_item_reducer";
import userReducer from "./user_reducer";

const entitiesReducer = combineReducers({
  games: gameReducer,
  genre: genreReducer,
  cart: cartItemReducer,
  library: libraryItemReducer,
  users: userReducer
})

export default entitiesReducer;