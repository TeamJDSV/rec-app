class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end
  
    def create
        user = User.create(user_params)
        render json: user    
    end
  
    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user
    end
  
    def destroy
        user = User.find(params[:id])
        users = User.all
        if user.destroy
            render json: users
        else
            render json: users.errors
        end
    end

    private
    def user_params
      params.require(:user).permit(:name, :age, :enjoys, :image)
    end
end
