import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  handleSubmit() {

  }

  updateBody() {

  }

  render() {
    let comments = this.props.comments;
    if (!comments) return null;

    const form = currentUser ?  (
    <div className="comment-new">
        <div className="comment-new-username">
          {currentUser.username[0].toUpperCase()}
        </div>
        <div className="comment-form-container">
          <form className="comment-form" onSubmit={this.handleSubmit}>
            <label>
              <input
                className="comment-form-body" 
                type="text"
                placeholder="Add a public comment..."
                value={this.state.body}
                onChange={this.updateBody}
                />
            </label>
            <div className="comment-line"></div>
            <div className="comment-underline">
              <div className="comment-emptybox"></div>
              <div className="comment-button-container">
                <button className="comment-cancel" onClick={handleCancel}>CANCEL</button>
                <input className="comment-submit" type="submit" value="COMMENT" />
              </div>
            </div>
          </form>
        </div>
    </div>
    ) : <div></div>
    return(
      <div>
        {form}
        {comments.map(comment => (
          <CommentIndexItem comment={comment} key={comment.id}/>
        ))}
      </div>
    )
  }

}

export default CommentIndex;