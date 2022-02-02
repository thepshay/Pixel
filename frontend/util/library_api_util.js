export const fetchAllLibraryItems = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/game_library_items'
  })
}

export const postLibraryItem = (game_library_item) => {
  return $.ajax({
    method: 'POST',
    url: 'api/game_library_items', 
    data: {game_library_item}
  })
}