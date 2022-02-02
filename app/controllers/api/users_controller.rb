require "open-uri"

class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      default_photo = open('https://pixel-made-dev.s3.us-west-1.amazonaws.com/pfp+default.png')
      @user.photo.attach(io: default_photo, filename: 'default.png')
  
      login!(@user)
      render :show
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private 

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
