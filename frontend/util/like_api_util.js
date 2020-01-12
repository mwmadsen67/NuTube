export const createLike = (videoId) => (
  $.ajax({
    method: 'POST',
    url: `api/videos/${videoId}/likes`,
    data: {
      like: {
        video_id: videoId
      }
    }
  })
);

export const deleteLike = (videoId, id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/videos/${videoId}/likes/${id}`
  })
);

export const createDislike = (videoId) => (
  $.ajax({
    method: 'POST',
    url: `api/videos/${videoId}/dislikes`,
    data: {
      dislike: {
        video_id: videoId
      }
    }
  })
);

export const deleteDislike = (videoId, id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/videos/${videoId}/dislikes/${id}`
  })
);