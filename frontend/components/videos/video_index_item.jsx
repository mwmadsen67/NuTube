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

  render(){
    // debugger
    const video = this.props.video;
    if (video === null) {
      return null;
    }
    return (
      <div className="video-index-item" onClick={this.handleClick}>
        <div className="video-image-crop"><img src={video.imageUrl} /></div>
        <span className="video-item-title">{video.title}</span>
        <span className="video-item-username">{video.username}</span>
      </div>
    );
  }
}

export default withRouter(VideoIndexItem);