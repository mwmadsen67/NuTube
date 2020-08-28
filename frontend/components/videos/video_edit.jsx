import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class VideoEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.video.title,
      description: this.props.video.description,
      length: this.props.video.length,
      videoUrl: this.props.video.videoUrl,
      imageFile: null,
      imageUrl: this.props.video.imageUrl,
      userId: this.props.video.userId,
      username: this.props.video.username,
      loading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.goVideo = this.goVideo.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  goVideo() {
    this.props.history.push(`/${this.props.videoId}`);
  }

  goHome() {
    this.props.history.push('/');
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      loading: true
    });

    const video = {
      id: this.props.video.id,
      title: this.state.title,
      description: this.state.description,
      length: this.state.length
    };

    this.props.updateVideo(video).then(res => this.goHome());
  }

  handleDelete(e) {
    e.preventDefault();

    this.props.deleteVideo(this.props.videoId).then(res => this.goHome());
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <div>
            <br/>
            <li className="new-video-error" key={`error-${i}`}>
              {error}
            </li>
          </div>
        ))}
      </ul>
    );
  }

  // componentDidMount(){
  //   this.setState({
  //     title: this.props.video.title,
  //     description: this.props.video.description,
  //     length: this.props.video.length,
  //     videoUrl: this.props.video.videoUrl,
  //     imageUrl: this.props.video.imageUrl,
  //   })
  // }

  render(){
    
    const preview = (this.state.imageUrl) ? <img width="200px" height="120px" src={this.state.imageUrl} /> : <div></div>;

    const loading = (this.state.loading) ? (
      <div className="new-video-loading">
        <FontAwesomeIcon className="new-video-spinner" icon="spinner" size="2x" color="white" pulse />
        &nbsp;
        <h3>Upload status: Processing your changes...</h3>
      </div>
    ) : (
      <div className="edit-video-submit">
        <div className="new-video-submit-container">
          <h2>Click "Save" to finalize your changes.</h2>
          <input className="new-video-submit-btn" type="submit" value="Save" />
        </div>
        <div className="delete-video">
          <h2>Click "Delete" to remove your video.</h2>
          <button className="delete-video-btn" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );

    const desc = (this.state.description || '');

    return(
      <div className="new-video-container">
        <Header />
        <div className="new-upper-spacer"></div>
        <div className="new-lower-video-container">
          <div className="new-inner-upload-container">
            <div className="new-upload">
              <form className="new-upload-form" onSubmit={this.handleSubmit}>
                <div className="new-video-fields">
                  <div className="new-upper-field">
                    <div className="new-upper-left">
                      {preview}
                    </div>
                    <div className="new-publish">
                      {this.renderErrors()}
                      {loading}
                    </div>
                  </div>
                  <div className="new-video-input-container">
                    <label>
                      <input className="new-video-input" 
                        type="text" 
                        placeholder="Title" 
                        value={this.state.title} 
                        autoFocus 
                        onChange={this.update('title')} />
                    </label>
                  </div>
                  <div className="new-video-input-container">
                    <label>
                      <textarea className="new-video-description" 
                        type="text" 
                        placeholder="Description" 
                        value={desc}  
                        onChange={this.update('description')}>
                      </textarea>
                    </label>
                  </div>
                  <div className="new-video-input-container">
                    <label>
                      <input className="new-video-input" 
                        type="text" 
                        placeholder="Length" 
                        value={this.state.length}  
                        onChange={this.update('length')} />
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoEdit);