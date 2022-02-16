class Api::GameLibraryItemsController < ApplicationController

  def index
    @library_items = User.find(params[:user_id]).game_library_items
    render :index
  end

  def create
    @library_item = GameLibraryItem.new(library_params)
    @library_items = User.find(library_params[:user_id]).game_library_items
    if @library_item.save
      render :index
    else
      render json: @library_item.errors.full_messages, status: 422
    end
  end

  private
  def library_params
    params.require(:game_library_item).permit(:user_id, :game_id, :hours)
  end

end
