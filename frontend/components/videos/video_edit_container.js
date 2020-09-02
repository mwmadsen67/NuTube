import { connect } from 'react-redux';
import { requestVideo, updateVideo, deleteVideo, clearVideoErrors } from '../../actions/video_actions';
import VideoEdit from './video_edit';

const mapStateToProps = (state, { match }) => {
  const videoId = parseInt(match.params.videoId);
  return {
    videoId: videoId,
    video: state.entities.videos[videoId],
    errors: state.errors.videos
  }
};

const mapDispatchToProps = dispatch => ({
  requestVideo: id => dispatch(requestVideo(id)),
  updateVideo: video => dispatch(updateVideo(video)),
  deleteVideo: id => dispatch(deleteVideo(id)),
  clearErrors: () => dispatch(clearVideoErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoEdit);
