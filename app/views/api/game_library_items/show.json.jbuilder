game = @library_item.game
json.library_id @library_item.id
json.game_id game.id
json.headerUrl url_for(game.header)
json.hours @library_item.hours