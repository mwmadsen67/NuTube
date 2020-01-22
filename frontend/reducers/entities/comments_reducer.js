import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../../actions/comment_actions';
import { RECEIVE_VIDEO } from '../../actions/video_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    case RECEIVE_VIDEO:
      if (action.payload.comments) {
        return action.payload.comments;
      } else {
        return state;
      }
    case REMOVE_COMMENT:
      let newState = Object.assign({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
}

export default commentsReducer;