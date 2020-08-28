import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      commentsArray: this.props.commentsArray
    }
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('comment[body]', this.state.body);
    formData.append('comment[user_id]', this.props.currentUser.id);
    formData.append('comment[video_id]', this.props.videoId);
    this.props.createComment(formData)
      .then(this.handleCancel)
  }

  handleCancel() {
    this.setState({
      body: ''
    })
  }

  updateBody(e) {
    this.setState({
      body: e.target.value
    })
  }

  render() {
    let currentUser = this.props.currentUser;
    let comments = this.props.commentsArray;
    if (!comments) return null;
    
    const form = currentUser ?  (
    <div className="comment-new">
        <button className="comment-picture">
          {currentUser.username[0].toUpperCase()}
        </button>
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
          <div className="comment-underline">
            <div className="comment-emptybox"></div>
            <div className="comment-button-container">
              <button className="comment-cancel" onClick={this.handleCancel}>CANCEL</button>
              <input className="comment-submit" type="submit" value="COMMENT" />
            </div>
          </div>
        </form>
    </div>
    ) : <div></div>
    return(
      <div className="comment-container">
        {form}
        {comments.map(comment => {
          if (comment.videoId === this.props.videoId){
            return <CommentIndexItem key={comment.id} 
              comment={comment} 
              currentUser={this.props.currentUser} 
              deleteComment={this.props.deleteComment}
            />
          };
        })}
      </div>
    )
  }

}

export default CommentIndex;