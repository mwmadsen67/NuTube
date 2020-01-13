import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comment_actions';
import  { commentsArray } from '../../reducers/selectors';
import CommentIndex from './comment_index';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.users[state.session.id],
    comments: commentsArray(state.entities.comments)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: (videoId, commentId) => dispatch(deleteComment(videoId, commentId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);