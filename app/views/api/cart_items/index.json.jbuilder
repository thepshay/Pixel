@cart_items.each do |item|
  game = item.game
  json.set! game.id do 
    json.cart_id item.id
    json.user_id item.user_id
    json.game_id game.id
    json.title game.title
    json.price game.price
    json.headerUrl url_for(game.header)
  end
end

