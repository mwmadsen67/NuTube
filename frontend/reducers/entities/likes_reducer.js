import { RECEIVE_LIKE, RECEIVE_DISLIKE, REMOVE_LIKE, REMOVE_DISLIKE } from '../actions/like_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';

export const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LIKE:
      if (action.like) {
        return Object.assign({}, state, { [action.like.id]: action.like });
      } else {
        return state;
      }
    case RECEIVE_VIDEO:
      if (action.payload.likes) {
        return action.payload.likes;
      } else {
        return state;
      };
    case REMOVE_LIKE:
      let newState = Object.assign({}, state);
      delete newState[action.likeId];
      return newState;
    default:
      return state;
  }
};

export const dislikesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DISLIKE:
      if (action.dislike) {
        return Object.assign({}, state, { [action.dislike.id]: action.dislike });
      } else {
        return state;
      }
    case RECEIVE_VIDEO:
      if (action.payload.dislikes) {
        return action.payload.dislikes;
      } else {
        return state;
      };
    case REMOVE_DISLIKE:
      let newState = Object.assign({}, state);
      delete newState[action.dislikeId];
      return newState;
    default:
      return state;
  }
};