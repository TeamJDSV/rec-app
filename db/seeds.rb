# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create email: 'test1@test.com', password: 'password', password_confirmation: 'password', name: 'BigBodySam', picture: 'https://i1.sndcdn.com/avatars-si6VMrH1nO5JwyQe-jB5sJw-t500x500.jpg', userLocation:'San Diego', aboutme:"That's all." 

user2 = User.create email: 'test2@test.com', password: 'password', password_confirmation: 'password', name: 'Darwin', picture: "https://lh3.googleusercontent.com/kiK6RmV1JCI-SxK14DoXFj183X5P013yVH3E01k5l3G-g7V2iYtT0HuS-dbuRLeBAV7eMSVBbezEWwAUqmdose1np2jTflfl-ALYXLVB7eE9tfq-LjljgtaA5c7URBWPNJFqGmrs=w2400", userLocation:'San Diego', aboutme:"That's all +2." 


posts = [    
    { 
    location: "Queen Bee's", 
    review:'LIT AF!?', 
    star_rating: 5, 
    picture:'https://lh3.googleusercontent.com/z0QkuV4prYyiiqJ_iA-vvQZgSiJ_CwOV7Xv7XSAEpqPLJH4Wv5UFlQsrQkMDL6wiea9-JymoGWGCdgK3UUBs_i1O2MZrm2vbN08b2jrk4fijllYbRV4egZxPIy7zFWqCF_yFw06c=w2400', 
    day: 'false', 
    user_id: user1.id 
    },
    location: 'Facebook HQ', 
    review:'Food is great.?!', 
    star_rating: 5, 
    picture:'https://lh3.googleusercontent.com/z0QkuV4prYyiiqJ_iA-vvQZgSiJ_CwOV7Xv7XSAEpqPLJH4Wv5UFlQsrQkMDL6wiea9-JymoGWGCdgK3UUBs_i1O2MZrm2vbN08b2jrk4fijllYbRV4egZxPIy7zFWqCF_yFw06c=w2400', 
    day: 'true', 
    user_id: user2.id 
]


posts.each do |post|
    Post.create post
  puts "creating post #{post}"
end








# User.create([{ email: 'test2@test.com', password: 'password', password_confirmation: 'password', name: 'testuser2', picture: ', userLocation:'Tijuana', aboutme:'That's all.' }])

# user2 = User.second

# user2.posts.create([{ location: 'Hong Kong', review:'Alll's good', star_rating: 5, picture:'10week/rec-app/app/javascript/components/assets/night_life_default.jpeg', day: 'true', user_id: 2 }])

# User.create([{ email: 'test3@test.com', password: 'password', password_confirmation: 'password', name: 'testuser3', picture: ', userLocation:'Tijuana', aboutme:'That's all.' }])

# user3 = User.third

# user3.posts.create([{ location: 'Crypto.com Arena AKA:Staple Center', review:'Alll's good', star_rating: 5, picture:', day: 'true', user_id: 3 }])