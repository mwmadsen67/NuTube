json.extract! @comment, :id, :body, :user_id, :video_id
json.createdAt time_ago_in_words(@comment.created_at)
json.username @comment.user.username