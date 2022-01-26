import {RECEIVE_ALL_GAMES, RECEIVE_GAME} from '../actions/game_actions';

const gameReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_GAMES:
      return action.games.games;
    case RECEIVE_GAME:
      return {
        ...state,
        [action.game.id]: action.game
      }
    default: 
      return state;
  }
}

export default gameReducer;