require 'open-uri'
class User < ApplicationRecord

  validates :email, presence: true, uniqueness: true
  validates :session_token, :username, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  # validate :ensure_image, :ensure_banner

  after_initialize :ensure_session_token, :ensure_image, :ensure_banner
  # after_initialize :ensure_session_token
  attr_reader :password

  has_many :videos
  has_many :likes
  has_many :dislikes
  has_many :comments

  has_one_attached :image
  has_one_attached :banner

  def ensure_image
    if !self.image.attached?
      self.image.attach(io: open("https://s3-us-west-1.amazonaws.com/nutube-dev/test_img.png"), filename: 'default_image')
    end
  end

  def ensure_banner
    if !self.banner.attached?
      # require 'open-uri'
      self.banner.attach(io: open("https://s3-us-west-1.amazonaws.com/nutube-dev/matrix-code.jpg"), filename: 'default_banner')
    end
  end

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
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
