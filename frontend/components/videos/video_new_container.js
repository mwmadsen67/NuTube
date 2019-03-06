import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import VideoNew from './video_new';

const mapStateToProps = state => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  createVideo: video => dispatch(createVideo(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoNew);