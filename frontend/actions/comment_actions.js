import * as CommentApiUtil from '../util/comment_api_util';

// export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

// const receiveComments = comments => {
//   return({
//     type: RECEIVE_COMMENTS,
//     comments
//   });
// };

const receiveComment = comment => {
  return ({
    type: RECEIVE_COMMENT,
    comment
  });
};

const removeComment = commentId => {
  return({
    type: REMOVE_COMMENT,
    commentId
  });
};

// export const fetchComments = videoId => dispatch => (
//   CommentApiUtil.fetchComments(videoId).then(comments => dispatch(receiveComments(comments)))
// );


export const createComment = comment => dispatch => (
  CommentApiUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = (videoId, commentId) => dispatch => (
  CommentApiUtil.deleteComment(videoId, commentId)
    .then(commentId => dispatch(removeComment(commentId)))
);