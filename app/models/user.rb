class User < ApplicationRecord
  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token 
  
  attr_reader :password

  has_one_attached :photo
  has_many :cart_items
  has_many :game_library_items

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    if user && user.is_password?(password)
      user  
    else  
      nil  
    end
  end

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token! 
    self.session_token = SecureRandom::urlsafe_base64 
    self.save! 
    self.session_token 
  end

  def ensure_session_token 
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
