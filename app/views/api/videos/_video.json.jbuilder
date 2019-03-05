json.extract! video, :id, :title, :description, :user_id#, :io, :filename
json.videoUrl url_for(video.video_attach)
json.imageUrl url_for(video.image)
