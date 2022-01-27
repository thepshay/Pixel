class Game < ApplicationRecord
  has_one_attached :header
  has_many_attached :photos
  has_one_attached :feature
end
