require 'rails_helper'

RSpec.describe "Posts", type: :request do
  describe "GET /index" do
    it "gets a list of posts" do
      user1 = User.create email: 'test12@test.com', password: 'p2assword', password_confirmation: 'p2assword', name: 'BigBodyS2am', picture: 'https://i1.sndcdn.com/avatars-si6VMrH1nO5JwyQe-jB5sJw-t500x500.jpg', userLocation:'San Di2ego', aboutme:"Tha2t's all." 

      work = Post.create(
        location: "Queen Bee's", 
        review:"LIT AF!?", 
        star_rating: 5, 
        picture:"https://lh3.googleusercontent.com/z0QkuV4prYyiiqJ_iA-vvQZgSiJ_CwOV7Xv7XSAEpqPLJH4Wv5UFlQsrQkMDL6wiea9-JymoGWGCdgK3UUBs_i1O2MZrm2vbN08b2jrk4fijllYbRV4egZxPIy7zFWqCF_yFw06c=w2400", 
        day: "false", 
        user_id: user1.id 
      )
      get '/posts'

      post = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(post.length).to eq 1
    end
  end

  describe "POST /create" do
    it "creates a post" do
      post_params = {
        post:   {
          location: 'Facebook HQ', 
          review:'Food is great.?!', 
          star_rating: 5, 
          picture:'https://lh3.googleusercontent.com/z0QkuV4prYyiiqJ_iA-vvQZgSiJ_CwOV7Xv7XSAEpqPLJH4Wv5UFlQsrQkMDL6wiea9-JymoGWGCdgK3UUBs_i1O2MZrm2vbN08b2jrk4fijllYbRV4egZxPIy7zFWqCF_yFw06c=w2400', 
          day: 'true', 
        }
      }
      post"/posts", params:post_params
      post = Post.first
      expect(response).to have_http_status(200)
      expect(post.location).to eq "Facebook HQ"
    end
  end

  describe "Delete /destroy" do
    it "deletes a post from the directory" do
      user1 = User.create email: 'test12@test.com', password: 'p2assword', password_confirmation: 'p2assword', name: 'BigBodyS2am', picture: 'https://i1.sndcdn.com/avatars-si6VMrH1nO5JwyQe-jB5sJw-t500x500.jpg', userLocation:'San Di2ego', aboutme:"Tha2t's all." 

        Post.create(
        location: "Queen Bee's", 
        review:"LIT AF!?", 
        star_rating: 5, 
        picture:"https://lh3.googleusercontent.com/z0QkuV4prYyiiqJ_iA-vvQZgSiJ_CwOV7Xv7XSAEpqPLJH4Wv5UFlQsrQkMDL6wiea9-JymoGWGCdgK3UUBs_i1O2MZrm2vbN08b2jrk4fijllYbRV4egZxPIy7zFWqCF_yFw06c=w2400", 
        day: "false", 
        user_id: user1.id 
      )
      post = Post.first

      delete"/posts/#{post.id}"

      expect(response).to have_http_status(200)

      expect(Post.find_by(id: post.id)).to be_nil 
    end
  end

end