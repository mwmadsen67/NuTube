import React from 'react';
import { withRouter } from 'react-router-dom';

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.videoDuration = this.videoDuration.bind(this);
  }

  handleClick(){
    const videoId = this.props.video.id;
    this.props.history.push(`/${videoId}`);
  }

  videoDuration(length) {
    let sec_remainder = length % 60;
    if (sec_remainder < 10) {
      sec_remainder = "0" + sec_remainder.toString();
    } else {
      sec_remainder = sec_remainder.toString();
    }
    return (Math.floor((length / 60)).toString() + ":" + sec_remainder);
  }

  render(){
    // debugger
    const video = this.props.video;
    if (video === null) {
      return null;
    }
    return (
      <div className="video-index-item" onClick={this.handleClick}>
        <div className="video-image-container">
          <div className="video-image-crop"><img src={video.imageUrl} /></div>
          <span className="video-item-duration">{this.videoDuration(video.length)}</span>
        </div>
        <span className="video-item-title">{video.title}</span>
        <span className="video-item-username">{video.username}</span>
      </div>
    );
  }
}

export default withRouter(VideoIndexItem);