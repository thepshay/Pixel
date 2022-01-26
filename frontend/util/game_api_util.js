const fetchAllGames = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/games'
  })
}

const fetchAllGames = (gameId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/games',
    data: {gameId}
  })
}