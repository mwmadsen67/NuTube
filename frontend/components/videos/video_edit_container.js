import { connect } from 'react-redux';
import { updateVideo } from '../../actions/video_actions';
import VideoEdit from './video_edit';

const mapStateToProps = (state, { match }) => {
  const videoId = match.params.videoId;
  return {
    videoId: videoId,
    video: state.entities.videos[videoId],
    errors: state.errors.session
  }
};

const mapDispatchToProps = dispatch => ({
  updateVideo: video => dispatch(updateVideo(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoEdit);
