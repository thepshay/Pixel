import {RECEIVE_ALL_GAMES, RECEIVE_GAME} from '../actions/game_actions';

const gameReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_GAMES:
      return action.games.genre;
    case RECEIVE_GAME:
      return {
        ...state,
        [games.id]: action.game
      }
    default: 
      return state;
  }
}

export default gameReducer;