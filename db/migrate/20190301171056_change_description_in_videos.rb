class ChangeDescriptionInVideos < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:videos, :description, true)
  end
end
