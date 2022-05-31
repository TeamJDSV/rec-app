# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


User.create([{ email: "test1@test.com", password: "password", password_confirmation: "password", name: "testuser1", picture: "", userLocation:"San Diego", aboutme:"That's all." }])

user1 = User.first

user1.posts.create([{ location: "San Diego", review:"All's good", star_rating: 5, picture:"", day: "true", user_id: 1 }])

User.create([{ email: "test2@test.com", password: "password", password_confirmation: "password", name: "testuser2", picture: "", userLocation:"Tijuana", aboutme:"That's all." }])

user2 = User.second

user2.posts.create([{ location: "Hong Kong", review:"Alll's good", star_rating: 5, picture:"10week/rec-app/app/javascript/components/assets/night_life_default.jpeg", day: "true", user_id: 2 }])

User.create([{ email: "test3@test.com", password: "password", password_confirmation: "password", name: "testuser3", picture: "", userLocation:"Tijuana", aboutme:"That's all." }])

user3 = User.third

user3.posts.create([{ location: "Crypto.com Arena AKA:Staple Center", review:"Alll's good", star_rating: 5, picture:"", day: "true", user_id: 3 }])