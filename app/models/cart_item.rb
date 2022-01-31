class CartItem < ApplicationRecord
  validates :user_id, :game_id, presence: true
  validates :game_id, uniqueness: {scope: :user_id, message: 'is already in cart'}
  belongs_to :user
  belongs_to :game
end
