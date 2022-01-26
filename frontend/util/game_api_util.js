export const fetchAllGames = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/games'
  })
}

export const fetchGame = (gameId) => {
  return $.ajax({
    method: 'GET',
    url: `api/games/${gameId}`  
  })
}