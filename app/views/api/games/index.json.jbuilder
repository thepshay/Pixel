json.games do 
  @games.each do |game|
    json.set! game.id do
      json.partial! 'game', game: game 
    end
  end
end

# returns the a hash with genre as key and array of game ids as val
genre_hash = Hash.new {|h, k| h[k] = []}
@games.each do |game|
  genre_hash[game.genre_1].push(game.id)
  genre_hash[game.genre_2].push(game.id)
end

json.genre genre_hash