import { connect } from 'react-redux';
import { updateVideo, deleteVideo } from '../../actions/video_actions';
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
  updateVideo: video => dispatch(updateVideo(video)),
  deleteVideo: id => dispatch(deleteVideo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoEdit);
