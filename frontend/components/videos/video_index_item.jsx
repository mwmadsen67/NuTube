import React from 'react';
import { withRouter } from 'react-router-dom';
import VideoShowContainer from './video_show_container';

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
    const { title } = this.props.video;
    return (
      <div className="video-index-item" onClick={this.handleClick}>
        <div className="video-image-crop"><img src={this.props.video.imageUrl} /></div>
        &nbsp;
        <span className="video-item-title">{title}</span>
        &nbsp;
      </div>
    );
  }
}

export default withRouter(VideoIndexItem);