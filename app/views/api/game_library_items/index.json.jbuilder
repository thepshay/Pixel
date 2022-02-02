@library_items.each do |item|
  game = item.game
  json.set! game.id do
    json.library_id item.id
    json.title game.title
    json.game_id game.id
    json.headerUrl url_for(game.header)
    json.hours item.hours
  end
end