import { combineReducers } from "redux";

import gameReducer from "./game_reducer";
import genreReducer from "./genre_reducer";

const entitiesReducer = combineReducers({
  games: gameReducer,
  genre: genreReducer
})

export default entitiesReducer;