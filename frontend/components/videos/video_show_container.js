import { connect } from 'react-redux';
import { requestVideo, requestUser } from '../../actions/video_actions';
import VideoShow from './video_show';
// import { selectVideo } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const videoId = match.params.videoId;
  return {
    videoId,
    video: state.entities.videos[videoId]
  };
};

const mapDispatchToProps = dispatch => ({
  requestVideo: id => dispatch(requestVideo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);