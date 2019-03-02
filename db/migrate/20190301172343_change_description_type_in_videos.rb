class ChangeDescriptionTypeInVideos < ActiveRecord::Migration[5.2]
  def change
    change_column :videos, :description, :text
  end
end
