export const RECEIVE_ALL_GAMES = 'RECEIVE_ALL_GAMES';
export const RECEIVE_GAME = 'RECEIVE_GAME';

import * as GameUtilApi from '../util/game_api_util';

const receiveAllGames = (games) => {
  return {
    type: RECEIVE_ALL_GAMES,
    games
  }
}

const receiveGame = (game) => {
  return {
    type: RECEIVE_GAME,
    game
  }
}

export const fetchAllGames = () => (dispatch) => {
  return GameUtilApi.fetchAllGames()
    .then((games) => dispatch(receiveAllGames(games)));
}

export const fetchGame = (gameId) => (dispatch) => {
  return GameUtilApi.fetchGame(gameId)
    .then((game) => dispatch(receiveGame(game)));
} 