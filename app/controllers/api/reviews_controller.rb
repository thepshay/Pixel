class Api::ReviewsController < ApplicationController

  def index
    @reviews = Game.find(params[:game_id]).reviews
    render :index
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review && @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    review = Review.find(params[:id])
    if review.destroy
      @reviews = Game.find(1).reviews
      render :index
    else
      render json: ['Unable to delete review'], status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:user_id, :game_id, :recommend, :body)
  end

end
