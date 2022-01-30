class Api::CartItemsController < ApplicationController

  def index 
    @cart_items = current_user.cart_items
    render :index
  end

  def create
    @cart_item = CartItem.new(cart_params)
    if @cart_item.save
      render :show
    else 
      render json: @cart_item.errors.full_messages
    end
  end

  def destroy 
    if params[:id] == 'all'
      destroy_all
    else 
      destory_one(params[:id])
    end
  end


  private
  def cart_params
    params.require(:cart_item).permit(:user_id, :game_id)
  end

  def destroy_all 
    @items = current_user.cart_items
    if @items.destroy_all 
      render json: {}
    else 
      render json: ['Unable to remove all items']
    end
  end

  def destory_one(id)
    @item = CartItem.find(id)
    if @item.destroy
      @cart_items = current_user.cart_items
      render :index
    else
      render json: ['Unable to delete item']
    end
  end

end