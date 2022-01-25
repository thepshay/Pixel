# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"
User.delete_all

user1 = User.create({username: 'Demo User', password: 'demmo usser'})
pfp1 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/pfp1.jpg')
user1.photo.attach(io: pfp1, filename: 'pfp1.jpg')

user2 = User.create({username: 'user2', password:'123456'})
pfp2 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/pfp2.jpg')
user2.photo.attach(io: pfp2, filename: 'pfp2.jpg')

user3 = User.create({username: 'user3', password:'123456'})
pfp3 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/pfp3.jpg')
user3.photo.attach(io: pfp3, filename: 'pfp3.jpg')

user4 = User.create({username: 'user4', password:'123456'})
pfp4 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/pfp4.jpg')
user4.photo.attach(io: pfp4, filename: 'pfp4.jpg')

user5 = User.create({username: 'user5', password:'123456'})
pfp5 = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/pfp5.jpg')
user5.photo.attach(io: pfp5, filename: 'pfp5.jpg')