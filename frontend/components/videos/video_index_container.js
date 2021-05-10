import VideoIndex from './video_index';
import { connect } from 'react-redux';
import { requestVideos, searchVideos, requestUserVideos } from '../../actions/video_actions';
import { videoArray } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return{
    videos: videoArray(state.entities)
  };
};

const mapDispatchToProps = dispatch => ({
  requestVideos: () => dispatch(requestVideos()),
  searchVideos: query => dispatch(searchVideos(query)),
  fetchVideos: id => dispatch(requestUserVideos(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);