json.extract! game, :id, :title, :price, :genre_1, :genre_2

json.headerUrl url_for(game.header)
json.featureUrl url_for(game.feature)

photoUrls = game.photos.map do |photo|
  url_for(photo)
end
json.photoUrls photoUrls 
