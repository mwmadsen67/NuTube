import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import VideoNew from './video_new';
import { clearVideoErrors } from '../../actions/video_actions';

const mapStateToProps = state => ({
  errors: state.errors.videos,
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  createVideo: video => dispatch(createVideo(video)),
  clearErrors: () => dispatch(clearVideoErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoNew);