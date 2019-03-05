import React from 'react';
import Header from '../header';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  componentDidMount() {
    this.props.requestVideos();
  }

  render() {
    // debugger
    return(
    <div className="index-video-page">
      <Header />
      <div className="index-top-spacer"></div>
      <div className="index-space-container">
        <div className="index-left-spacer"></div>
        <div className="index-container">
          <h1>Recommended</h1>
          &nbsp;
          {this.props.videos.map(video => (
            <VideoIndexItem
              video={video}
              key={video.id}
            />
          ))}
        </div>
      </div>
    </div>
    )
  }
}

export default VideoIndex;