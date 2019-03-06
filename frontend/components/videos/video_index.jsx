import React from 'react';
import Header from '../header';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  constructor(props){
    super(props);

    this.renderMoreVideos = this.renderMoreVideos.bind(this);
  }

  componentDidMount() {
    this.props.requestVideos();
  }

  renderMoreVideos(n) {
    if (this.props.videos.reverse()[n]) {
      return(
        <div className="index-recommended">
          {this.props.videos.reverse().slice(n, n + 5).map(video => (
            <VideoIndexItem
              video={video}
              key={video.id}
            />
          ))}
          {this.renderMoreVideos(n + 5)}
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }

  render() {
    // debugger
    return(
    <div className="index-video-page">
      <Header />
      <div className="index-top-spacer"></div>
      <div className="index-space-container">
        <div className="index-container">
          <h1>Recommended</h1>
          &nbsp;
          <div className="index-recommended">
            {this.props.videos.reverse().slice(0, 5).map(video => (
              <VideoIndexItem
                video={video}
                key={video.id}
              />
            ))}
          </div>
          &nbsp;
          <h1>More Videos</h1>
          &nbsp;
          {this.renderMoreVideos(5)}
        </div>
      </div>
    </div>
    )
  }
}

export default VideoIndex;