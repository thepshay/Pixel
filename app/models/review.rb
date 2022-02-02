class Review < ApplicationRecord
  validates :user_id, :game_id, :recommend, :body presence: true
  validates :game_id, uniqueness: {scope: :user_id, message: 'already has review'}

  belongs_to :user
  belongs_to :game

end
