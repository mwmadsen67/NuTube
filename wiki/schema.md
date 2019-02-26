# Database Schema

## `users`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `username`        | string    | not null                  |
| `email`           | string    | not null, indexed, unique |         
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ index on `email, unique: true`
+ index on `session_token, unique: true`
  
## `videos`
| column name          | data type | details                        |
|:---------------------|:---------:|:-------------------------------|
| `id`                 | integer   | not null, primary key          |
| `title`              | string    | not null                       |
| `description`        | string    | not null                       |
| `user_id`            | integer   | not null, indexed, foreign key |
| `created_at`         | datetime  | not null                       |
| `updated_at`         | datetime  | not null                       |

+ `user_id` references `users`
+ index on `user_id`
  
## `likes`
| column name       | data type | details                                |
|:------------------|:---------:|:---------------------------------------|
| `id`              | integer   | not null, primary key                  |
| `user_id`         | integer   | not null, indexed, unique, foreign key |
| `video_id`        | integer   | not null, indexed, unique, foreign key |             
| `created_at`      | datetime  | not null                               |
| `updated_at`      | datetime  | not null                               |

+ `user_id` references `users`  
+ `video_id` references `videos`
+ index on `[:video_id, :user_id], unique: true`
+ index on `:user_id, unique: true`

## `dislikes`
| column name       | data type | details                                |
|:------------------|:---------:|:---------------------------------------|
| `id`              | integer   | not null, primary key                  |
| `user_id`         | integer   | not null, indexed, unique, foreign key |
| `video_id`        | integer   | not null, indexed, unique, foreign key |             
| `created_at`      | datetime  | not null                               |
| `updated_at`      | datetime  | not null                               |

+ `user_id` references `users`  
+ `video_id` references `videos`
+ index on `[:video_id, :user_id], unique: true`
+ index on `:user_id, unique: true`

## `comments`
| column name       | data type | details                        |
|:------------------|:---------:|:-------------------------------|
| `id`              | integer   | not null, primary key          |
| `body`            | string    | not null                       |
| `user_id`         | integer   | not null, indexed, foreign key |
| `video_id`        | integer   | not null, indexed, foreign key |             
| `created_at`      | datetime  | not null                       |
| `updated_at`      | datetime  | not null                       |

+ `user_id` references `users`  
+ `video_id` references `videos`

## `plays`
| column name       | data type | details               |
|:------------------|:---------:|:----------------------|
| `id`              | integer   | not null, primary key |
| `user_id`         | integer   | not null, foreign key |
| `video_id`        | integer   | not null, foreign key |             
| `created_at`      | datetime  | not null              |
| `updated_at`      | datetime  | not null              |

+ `user_id` references `users`  
+ `video_id` references `videos`
  
## `upvotes`
| column name       | data type | details                                |
|:------------------|:---------:|:---------------------------------------|
| `id`              | integer   | not null, primary key                  |
| `user_id`         | integer   | not null, indexed, unique, foreign key |
| `comment_id`      | integer   | not null, indexed, unique, foreign key |             
| `created_at`      | datetime  | not null                               |
| `updated_at`      | datetime  | not null                               |

+ `user_id` references `users`  
+ `comment_id` references `comments`
+ index on `[:comment_id, :user_id], unique: true`
+ index on `:user_id, unique: true`

## `downvotes`
| column name       | data type | details                                |
|:------------------|:---------:|:---------------------------------------|
| `id`              | integer   | not null, primary key                  |
| `user_id`         | integer   | not null, indexed, unique, foreign key |
| `comment_id`      | integer   | not null, indexed, unique, foreign key |             
| `created_at`      | datetime  | not null                               |
| `updated_at`      | datetime  | not null                               |

+ `user_id` references `users`  
+ `comment_id` references `comments`
+ index on `[:comment_id, :user_id], unique: true`
+ index on `:user_id, unique: true`
