import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_DISLIKE = "RECEIVE_DISLIKE";
export const REMOVE_DISLIKE = "REMOVE_DISLIKE";

const receiveLike = like => {
  return({
    type: RECEIVE_LIKE,
    like: like
  });
};

const removeLike = likeId => {
  return({
    type: REMOVE_LIKE,
    likeId: likeId
  });
};

const receiveDislike = dislike => {
  return({
    type: RECEIVE_DISLIKE,
    dislike: dislike
  });
};

const removeDislike = dislikeId => {
  return({
    type: REMOVE_DISLIKE,
    dislikeId: dislikeId
  });
};

export const createLike = (videoId) => dispatch => (
  LikeApiUtil.createLike(videoId).then( like => dispatch(receiveLike(like)))
);

export const deleteLike = (videoId, id) => dispatch => (
  LikeApiUtil.deleteLike(videoId, id).then( likeId => dispatch(removeLike(likeId)))
);

export const createDislike = (videoId) => dispatch => (
  LikeApiUtil.createDislike(videoId).then( dislike => dispatch(receiveDislike(dislike)))
);

export const deleteDislike = (videoId, id) => dispatch => (
  LikeApiUtil.deleteDislike(videoId, id).then( dislikeId => dispatch(removeDislike(dislikeId)))
);