class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts.as_json(include: :user)
    end
  
    def create
        post = Post.create(post_params)
        render json: post    
    end
  
    def update
        post = Post.find(params[:id])
        post.update(post_params)
        render json: post
    end
  
    def destroy
        post = Post.find(params[:id])
        posts = Post.all
        if post.destroy
            render json: posts
        else
            render json: posts.errors
        end
    end

    private
    def post_params
      params.require(:post).permit(:location, :review, :star_rating, :picture, :day)
    end
end
