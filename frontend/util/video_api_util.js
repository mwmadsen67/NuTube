export const fetchVideos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/videos'
  })
);

export const searchVideos = query => (
  $.ajax({
    method: 'GET',
    url: 'api/videos/search',
    data: {query}
  })
)

export const fetchVideo = id => (
  $.ajax({
    method: 'GET',
    url: `api/videos/${id}`,
  })
);

export const createVideo = videoData => (
  $.ajax({
    method: 'POST',
    url: 'api/videos',
    data: { videoData },
    contentType: false,
    processData: false
  })
);

export const updateVideo = video => (
  $.ajax({
    method: 'PATCH',
    url: `api/videos/${video.id}`,
    data: { video: {
      title: video.title,
      description: video.description,
      length: video.length
      }
    }
  })
);

export const deleteVideo = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/videos/${id}`
  })
);