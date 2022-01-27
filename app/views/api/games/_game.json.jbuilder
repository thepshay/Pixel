json.extract! game, :id, :title, :price

json.headerUrl url_for(game.header)

if !game.feature
  feature = ''
else 
  feature = url_for(game.feature)
end

json.feature feature

photoUrls = game.photos.map do |photo|
  url_for(photo)
end
json.photoUrls photoUrls 
