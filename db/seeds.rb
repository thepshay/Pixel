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

user1 = User.find(1);
file = open('https://wiki.teamfortress.com/w/images/5/57/Buffed_blu_soldier.jpg')
user1.photo.attach(io: file, filename: 'blu_soldier.jpg')