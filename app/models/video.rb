class Video < ApplicationRecord
  validates :title, :length, presence: true
  validates :title, length: { maximum: 100 }
  validates :description, length: { maximum: 5000, allow_nil: true }
  validates :length, length: { maximum: 500 }

  belongs_to :user

  # Active Storage Association
  has_one_attached :video_attach
  has_one_attached :image

  has_many :likes
  has_many :dislikes
  has_many :comments

  def duration(seconds)
    sec_remainder = seconds % 60
    if sec_remainder < 10
      sec_remainder = "0" + sec_remainder.to_s
    else
      sec_remainder = sec_remainder.to_s
    end
    return ((seconds / 60).to_s + ":" + sec_remainder)
  end

  def num_likes
    # self.likes.count
    Like
      .joins(:video)
      .where(video_id: self.id)
      .count
  end

  def num_dislikes
    # self.dislikes.count
    Dislike
      .joins(:video)
      .where(video_id: self.id)
      .count
  end

  def vid_likes(user)
    # .select(:user_id)
    Like
      .select(:id, :user_id)
      .joins(:video)
      .where(video_id: self.id)
      .find_by(user_id: user.id)
  end

  def vid_dislikes(user)
    # .select(:user_id)
    Dislike
      .select(:id, :user_id)
      .joins(:video)
      .where(video_id: self.id)
      .find_by(user_id: user.id)
  end
  
end
