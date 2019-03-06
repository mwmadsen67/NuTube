import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class VideoNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      length: '',
      videoUrl: null,
      imageFile: null,
      imageUrl: null,
      loading: false
    };
    this.handleVideo = this.handleVideo.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    this.props.history.push('/');
  }
  
  handleVideo(e) {
    this.setState({videoUrl: e.currentTarget.files[0]});
  }
  
  handlePreview(e) {
    const img = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: img, imageUrl: fileReader.result });
    }; 
    if (img) {
      fileReader.readAsDataURL(img);
    }
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
    formData.append('video[user_id]', this.props.currentUser.id);
    formData.append('video[video_attach]', this.state.videoUrl);
    formData.append('video[image]', this.state.imageFile);

    this.setState({
      loading: true
    });

    this.props.createVideo(formData).then(res => this.goHome());
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
  
  render() {
    const preview = (this.state.imageUrl) ? <img width="200px" height="120px" src={this.state.imageUrl} /> : null;
    const uploadBtn = (this.state.videoUrl === null || this.state.imageUrl === null) ? "new-video-upload-btn-container" : "hidden-btn";
    const videoFields = (this.state.videoUrl !== null && this.state.imageUrl !== null) ? "new-video-fields" : "hidden-fields";
    const loading = (this.state.loading) ? (
      <div className="new-video-loading">
        <FontAwesomeIcon className="new-video-spinner" icon="spinner" size="2x" color="white" spin />
        &nbsp;
        <h3>Upload status: Processing your video...</h3>
      </div>
    ) : (
      <div className="new-video-submit-container">
        <h2>Click "Publish" to make your video live.</h2>
        <input className="new-video-submit-btn" type="submit" value="Publish" />
      </div>
    );
    return (
      <div className="new-video-container">
        <Header />
        <div className="new-upper-spacer"></div>
        <div className="new-lower-video-container">
          <div className="new-inner-upload-container">
            <div className="new-upload">
              <form className="new-upload-form" onSubmit={this.handleSubmit}>
                <div className={uploadBtn}>
                {/* <div className="hidden-btn" > */}
                {/* TEMPORARY TESTING */}
                  <label htmlFor="new-video-upload-input">
                    <FontAwesomeIcon className="new-video-upload-btn" icon="arrow-alt-circle-up" size="4x" color="white" />
                    <input id="new-video-upload-input" onChange={this.handleVideo} type="file" accept="video/*" />
                  </label>
                  &nbsp;
                  <h3>Select video to upload</h3>
                </div>
                <div className={uploadBtn}>
                {/* <div className="hidden-btn" > */}
                {/* TEMPORARY TESTING */}
                  <label htmlFor="new-img-upload-input">
                    <FontAwesomeIcon className="new-video-upload-btn" icon={['far', 'arrow-alt-circle-up']} size="4x" color="white" />
                    <input id="new-img-upload-input" onChange={this.handlePreview} type="file" accept="image/*" />
                  </label>
                  &nbsp;
                  <h3>Select preview image</h3>
                </div>
                <div className={videoFields}>
                {/* <div className="new-video-fields" > */}
                {/* TEMPORARY TESTING */}
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
export default withRouter(VideoNew);