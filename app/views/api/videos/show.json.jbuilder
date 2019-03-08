
like = @video.vid_likes(current_user)

dislike = @video.vid_dislikes(current_user)

if like 
  json.likes do 
    json.extract! like, :id
  end
end

if dislike
  json.dislikes do
    json.extract! dislike, :id
  end
end

json.video do
  json.partial! 'api/videos/video', video: @video
end
