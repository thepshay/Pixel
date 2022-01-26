import { RECEIVE_ALL_GAMES } from '../actions/game_actions';

const genreReducer = (state={}, action)=>{
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_GAMES:
      return action.games.genre;
    default:
      return state;
  }
}

export default genreReducer;