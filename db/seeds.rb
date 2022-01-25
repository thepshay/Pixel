# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create([
  {username: 'user1', password:'123456'},
  {username: 'user2', password:'123456'},
  {username: 'user3', password:'123456'},
  {username: 'user4', password:'123456'},
  {username: 'user5', password:'123456'}
])

user1 = User.first
user1.photo.attach(io: File.open(File.join(Rails.root, 'app/assets/images/profile_pictures/pfp1.jpg')), filename: 'pfp1.jpg')