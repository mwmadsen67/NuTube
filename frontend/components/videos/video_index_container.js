import VideoIndex from './video_index';
import { connect } from 'react-redux';
import { requestVideos } from '../../actions/video_actions';
import { videoArray } from '../../reducers/selectors';

const mapStateToProps = state => {
  return{
    videos: videoArray(state.entities)
  };
};

const mapDispatchToProps = dispatch => ({
  requestVideos: () => dispatch(requestVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);