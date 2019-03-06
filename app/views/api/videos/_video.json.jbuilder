json.extract! video, :id, :title, :description, :length, :user_id
json.videoUrl url_for(video.video_attach)
json.imageUrl url_for(video.image)
json.username video.user.username