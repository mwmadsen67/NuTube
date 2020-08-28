import React from 'react';

const CommentIndexItem = props => {
  if (!props.comment) return null;

  const handleDelete = () => {
    props.deleteComment(props.comment.videoId, props.comment.id)
  }
  return(
    <div className="comment-index-item">
      <div className="comment-info">
        <button className="comment-picture">
          {props.comment.username[0].toUpperCase()}
        </button>
        <div className="comment-item-text">
          <div className="comment-header">
            <div className="comment-item-username">{props.comment.username}</div>
            <div id="comment-item-date">{props.comment.createdAt} ago</div>
          </div>
          <div className="comment-item-body">{props.comment.body}</div>
        </div>
      </div>
    {(!props.currentUser || props.currentUser.id !== props.comment.userId) ? (
      <div></div>) : <button className="comment-delete" onClick={handleDelete}>DELETE</button>}
  </div>
  )
  
};

export default CommentIndexItem;