class Video < ApplicationRecord
  validates :title, :length, :user_id, presence: true
  validates :title, length: { maximum: 100 }
  validates :description, length: { maximum: 5000, allow_nil: true }
  validates :length, length: { maximum: 500 }

  belongs_to :user

  # Active Storage Association
  has_one_attached :video

  def duration(seconds)
    sec_remainder = seconds % 60
    if sec_remainder < 10
      sec_remainder = "0" + sec_remainder.to_s
    else
      sec_remainder = sec_remainder.to_s
    end
    return ((seconds / 60).to_s + ":" + sec_remainder)
  end
  
end
