user = @review.user
json.id @review.id
json.game_id @review.game_id
json.user_id user.id
json.username user.username
json.profile_pic url_for(user.photo)
json.recommend @review.recommend
json.body @review.body
json.date @review.created_at