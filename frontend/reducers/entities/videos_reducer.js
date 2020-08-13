import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../../actions/video_actions';

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
    case RECEIVE_VIDEO:
      return Object.assign({}, state, { [action.payload.video.id]: action.payload.video });
    case REMOVE_VIDEO:
      let newState = Object.assign({}, state);
      delete newState[action.videoId];
      return newState;
    default:
      return state;
  }
};

export default videosReducer;