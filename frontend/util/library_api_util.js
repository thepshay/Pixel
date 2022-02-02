export const fetchAllLibraryItems = (userId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/game_library_items',
    data: { user_id: userId}
  })
}

export const postLibraryItem = (game_library_item) => {
  return $.ajax({
    method: 'POST',
    url: 'api/game_library_items', 
    data: {game_library_item}
  })
}