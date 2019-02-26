# Backend Routes

## HTML

+ `GET /` `StaticPagesController#root`

## API Endpoints

### `users`
+ `GET /api/users` - returns the user information of uploaded videos
+ `POST /api/users` - sign up

### `session`
+ `POST /api/session` - log in
+ `DELETE /api/session` - log out

### `videos`
+ `GET /api/videos` - returns relevant videos (filtered by `data`/`params`)
+ `GET /api/videos/:id` - returns video
+ `POST /api/videos` - creates a video
+ `DELETE /api/videos/:id` - remove a video

### `likes`
+ `POST /api/videos/:video_id/likes` - like a video
+ `DELETE /api/videos/:video_id/likes` - unlike a video

### `dislikes`
+ `POST /api/videos/:video_id/dislikes` - dislike a video
+ `DELETE /api/videos/:video_id/dislikes` - undislike a video

### `comments`
+ `POST /api/videos/comments` - creates a comment
+ `DELETE /api/videos/comments/:id` - remove a comment