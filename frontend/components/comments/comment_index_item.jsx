import React from 'react';

const CommentIndexItem = props => (
  <div className="comment-index-item">
    <div className="comment-item-picture">
      {props.comment.username[0].toUpperCase()}
    </div>
    <div className="comment-item-text">
      <div className="comment-header">
        <div className="comment-item-username">{props.comment.username}</div>
        <div className="comment-item-date">{props.comment.createdAt}</div>
      </div>
      <div className="comment-item-body">{comment.body}</div>
    </div>
  </div>
)

export default CommentIndexItem;