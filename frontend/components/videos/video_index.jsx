import React from 'react';
import Header from '../header';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class VideoIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
    this.renderMoreVideos = this.renderMoreVideos.bind(this);
  }

  componentDidMount() {
    debugger
    if (this.props.indexType === "profile") {
      this.props.fetchVideos(this.props.userId)
        .then(this.setState({ loading: false }));
    } else if (this.props.indexType !== "side" && this.props.history.action !== "PUSH") {
      this.props.requestVideos()
        .then(this.setState({ loading: false }));
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.props.fetchVideos(this.props.userId)
    }
  }

  renderMoreVideos(n) {
    if (this.props.videos.reverse()[n]) {
      return(
        <div>
          <div className="index-recommended">
          {this.props.videos.reverse().slice(n, n + 5).map(video => (
            <VideoIndexItem
              video={video}
              key={video.id}
              vidType={this.props.indexType}
            />
          ))}
          </div>
          &nbsp;
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

    if (this.props.indexType !== "main") {
      return (
        <div className="index-side">
          {this.props.videos.reverse().slice(0,10).map(video => (
            <VideoIndexItem
              video={video}
              key={video.id}
              vidType={this.props.indexType}
            />
          ))}
        </div>
      )
    }
    return(
    <div className="index-video-page">
      <Header search={this.props.searchVideos} />
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
                vidType={this.props.indexType}
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