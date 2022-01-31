import { combineReducers } from "redux";
import cartItemReducer from "./cart_item_reducer";

import gameReducer from "./game_reducer";
import genreReducer from "./genre_reducer";

const entitiesReducer = combineReducers({
  games: gameReducer,
  genre: genreReducer,
  cart: cartItemReducer
})

export default entitiesReducer;