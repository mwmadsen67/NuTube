json.extract! video, :id, :title, :description, :length, :user_id, :created_at
json.videoUrl url_for(video.video_attach)
json.imageUrl url_for(video.image)
json.username video.user.username
json.numLikes video.num_likes
json.numDislikes video.num_dislikes

