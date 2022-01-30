json.cart do 
  @cart_items.each do |item|
    json.set! item.id do 
      game = item.game
      json.cart_id item.id
      json.game_id game.id
      json.title game.title
      json.price game.price
      json.headerUrl url_for(game.header)
    end
  end
end
