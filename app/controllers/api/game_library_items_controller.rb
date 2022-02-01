class Api::GameLibraryItemsController < ApplicationController

  def index
    @library_items = current_user.game_library_items
    render :index
  end

  def create
    @library_item = GameLibraryItem.new(library_params)
    if @library_item.save
      render :show
    else
      render json: @library_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @items = current_user.game_library_items
    if @items.destroy_all 
      render json: {}
    else 
      render json: ['Unable to remove all items'], status: 422
    end
  end

  private
  def library_params
    params.require(:game_library_item).permit(:user_id, :game_id, :hours)
  end

end
