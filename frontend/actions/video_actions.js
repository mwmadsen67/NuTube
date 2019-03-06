import * as VideoApiUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

const receiveVideos = videos => {
  return({
    type: RECEIVE_VIDEOS,
    videos: videos
  });
};

const receiveVideo = video => {
  return({
    type: RECEIVE_VIDEO,
    video: video
  });
};

const removeVideo = videoId => {
  return({
    type: REMOVE_VIDEO,
    videoId: videoId
  });
};

const receiveVideoErrors = errors => {
  return({
    type: RECEIVE_VIDEO_ERRORS,
    errors
  });
};

export const requestVideos = () => dispatch => (
  VideoApiUtil.fetchVideos().then( videos => dispatch(receiveVideos(videos)),
  err => dispatch(receiveVideoErrors(err.responseJSON)))
);

export const requestVideo = (id) => dispatch => (
  VideoApiUtil.fetchVideo(id).then( video => dispatch(receiveVideo(video)),
  err => dispatch(receiveVideoErrors(err.responseJSON)))
);

export const createVideo = (videoData) => dispatch => (
  VideoApiUtil.createVideo(videoData).then( video => dispatch(receiveVideo(video)),
  err => dispatch(receiveVideoErrors(err.responseJSON)))
);

export const updateVideo = (video) => dispatch => (
  VideoApiUtil.updateVideo(video).then( video => dispatch(receiveVideo(video)),
  err => dispatch(receiveVideoErrors(err.responseJSON)))
);

export const deleteVideo = (id) => dispatch => (
  VideoApiUtil.deleteVideo(id).then( videoId => dispatch(removeVideo(videoId)),
  err => dispatch(receiveVideoErrors(err.responseJSON)))
);