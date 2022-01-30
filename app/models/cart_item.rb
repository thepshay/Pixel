class CartItem < ApplicationRecord
  validates :user_id, :game_id, presence: true
  validates :user_id, uniqueness: {scope: :game_id, message: 'Can only add one game to cart'}
  belongs_to :user
  belongs_to :game
end
