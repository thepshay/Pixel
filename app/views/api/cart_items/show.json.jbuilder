game = @cart_item.game
json.cart_id @cart_item.id
json.game_id game.id
json.user_id @cart_item.user_id
json.title game.title
json.price game.price
json.headerUrl url_for(game.header)