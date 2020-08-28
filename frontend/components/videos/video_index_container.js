import VideoIndex from './video_index';
import { connect } from 'react-redux';
import { requestVideos, searchVideos } from '../../actions/video_actions';
import { videoArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return{
    videos: videoArray(state.entities),
    indexType: ownProps.indexType
  };
};

const mapDispatchToProps = dispatch => ({
  requestVideos: () => dispatch(requestVideos()),
  searchVideos: query => dispatch(searchVideos(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);