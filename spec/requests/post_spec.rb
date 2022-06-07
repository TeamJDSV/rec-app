require 'rails_helper'

RSpec.describe "Posts", type: :request do
  describe "GET /index" do
    it "gets a list of posts" do
      Post.create(
        location: "Queen Bee's", 
        review:"LIT AF!?", 
        star_rating: 5, 
        picture:"https://lh3.googleusercontent.com/z0QkuV4prYyiiqJ_iA-vvQZgSiJ_CwOV7Xv7XSAEpqPLJH4Wv5UFlQsrQkMDL6wiea9-JymoGWGCdgK3UUBs_i1O2MZrm2vbN08b2jrk4fijllYbRV4egZxPIy7zFWqCF_yFw06c=w2400", 
        day: "false", 
      )
      get '/posts'

      # post = JSON.parse(response.body)
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
      post_params = {
        post:   {
          location: "Queen Bee's", 
          review:"LIT AF!?", 
          star_rating: 5, 
          picture:"https://lh3.googleusercontent.com/z0QkuV4prYyiiqJ_iA-vvQZgSiJ_CwOV7Xv7XSAEpqPLJH4Wv5UFlQsrQkMDL6wiea9-JymoGWGCdgK3UUBs_i1O2MZrm2vbN08b2jrk4fijllYbRV4egZxPIy7zFWqCF_yFw06c=w2400", 
          day: "false", 
        }
      }
      post"/posts", params:post_params
      post = Post.first

      delete"/posts/#{post.id}", params: post_params

      expect(response).to have_http_status(200)

      expect(Post.find_by(id: post.id)).to be_nil 
    end
  end

end