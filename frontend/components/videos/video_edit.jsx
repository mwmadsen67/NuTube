import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class VideoEdit extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   title: this.state.video.title,
    //   description: this.state.video.description,
    //   length: this.state.video.length,
    //   videoUrl: this.state.video.videoUrl,
    //   imageFile: null,
    //   imageUrl: this.state.video.imageUrl,
    //   loading: false
    // };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goVideo = this.goVideo.bind(this);
  }

  goVideo() {
    this.props.history.push(`/${this.props.video.id}`);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[length]', parseInt(this.state.length));

    this.setState({
      loading: true
    });

    this.props.updateVideo(formData).then(res => this.goVideo());
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

  componentDidMount(){
    this.setState({
      title: this.props.video.title,
      description: this.props.video.description,
      length: this.props.video.length,
      videoUrl: this.props.video.videoUrl,
      imageUrl: this.props.video.imageUrl,
    })
  }

  render(){

    const preview = (this.state.imageUrl) ? <img width="200px" height="120px" src={this.state.imageUrl} /> : null;

    const loading = (this.state.loading) ? (
      <div className="new-video-loading">
        <FontAwesomeIcon className="new-video-spinner" icon="spinner" size="2x" color="white" spin />
        <h3>Upload status: Processing your changes...</h3>
      </div>
    ) : (
      <div className="new-video-submit-container">
        <h2>Click "Publish" to make your video live.</h2>
        <input className="new-video-submit-btn" type="submit" value="Publish" />
      </div>
    );

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
                        value={this.state.description}  
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