import { connect } from 'react-redux';
import { requestVideo } from '../../actions/video_actions';
import { createLike, createDislike, deleteLike, deleteDislike } from '../../actions/like_actions';
import VideoShow from './video_show';
// import { selectVideo } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const videoId = match.params.videoId;
  // debugger
  return {
    videoId,
    video: state.entities.videos[videoId],
    currentUser: state.entities.users[state.session.id],
    likes: state.entities.likes,
    dislikes: state.entities.dislikes
  };
};

const mapDispatchToProps = dispatch => ({
  requestVideo: id => dispatch(requestVideo(id)),
  createLike: videoId => dispatch(createLike(videoId)),
  createDislike: videoId => dispatch(createDislike(videoId)),
  deleteLike: (videoId, id) => dispatch(deleteLike(videoId, id)),
  deleteDislike: (videoId, id) => dispatch(deleteDislike(videoId, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);