import { RECEIVE_LIKE, RECEIVE_DISLIKE, REMOVE_LIKE, REMOVE_DISLIKE } from '../actions/like_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';

export const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LIKE:
      if (action.like) {
        return action.like;
      } else {
        return null;
      }
    case RECEIVE_VIDEO:
      if (action.payload.likes) {
        return action.payload.likes;
      } else {
        return null;
      };
    case REMOVE_LIKE:
      return null;
    default:
      return state;
  }
};

export const dislikesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DISLIKE:
      if (action.dislike) {
        return action.dislike;
      } else {
        return null;
      }
    case RECEIVE_VIDEO:
      if (action.payload.dislikes) {
        return action.payload.dislikes;
      } else {
        return null;
      };
    case REMOVE_DISLIKE:
      return null;
    default:
      return state;
  }
};