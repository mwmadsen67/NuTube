import React from 'react';
import { withRouter } from 'react-router-dom';

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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
    const video = this.props.video;
    const klass1 = (this.props.vidType === "main" ? "video-index-item" : "video-side-item")
    const klass2 = (this.props.vidType === "main" ? "video-item-container" : "video-side-container")
    const klass3 = (this.props.vidType === "main" ? "video-image-container" : "video-side-image")
    const klass4 = (this.props.vidType === "main" ? "video-image-crop" : "video-side-crop")
    const klass5 = (this.props.vidType === "main" ? "video-item-words" : "video-side-words")
    if (video === null) {
      return null;
    }
    // let title = video.title.length > 50 ? video.title.slice(0, 50) + "..." : video.title
    return (
      <div className={klass1} onClick={this.handleClick}>
        <div className={klass2}>
          <div className={klass3}>
            <div className={klass4}><img src={video.imageUrl} /></div>
            <span className="video-item-duration">{this.videoDuration(video.length)}</span>
          </div>
          <div className={klass5}>
            <span className="video-item-title">{video.title}</span>
            <span className="video-item-username">{video.username}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoIndexItem);