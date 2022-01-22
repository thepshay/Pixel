class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only:[:destroy]
  
  def create 
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
      render '/api/users/show';
    else
      render json: ['Nope. Wrong credentials!'], status: 401
    end
  end

  def destroy  
    if current_user.nil?
      logout 
      render json: {}
    else 
      render json: ["No user logged in"], status: 404
    end
  end
end