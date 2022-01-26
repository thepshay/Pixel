json.extract! game, :id, :title, :price

json.headerUrl url_for(game.header)
photoUrls = game.photos.map do |photo|
  url_for(photo)
end
json.photoUrls photoUrls 
