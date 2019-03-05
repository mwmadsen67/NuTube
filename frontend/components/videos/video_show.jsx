import React from 'react';
import Header from '../header';

class VideoShow extends React.Component {

  componentDidMount() {
    this.props.requestVideo(this.props.videoId);
  }
  
  render (){

    const video = this.props.video;
    if (video === undefined) {
      return null;
    }

    return(
      <div className='show-video-page'>
        <Header />
        <div className='show-left-video'>
          <div className="show-top-spacer"></div>
          <div className='show-video'>
            <div className="show-left-spacer"></div>
              <div className="show-video-area">
                <video width="100%" height="auto" controls>
                  <source src={video.videoUrl} type="video/mp4"></source>
                </video>
                &nbsp;
                <h1>{video.title}</h1>
                &nbsp;
                <div className="show-video-user">
                  <button className="show-video-user-btn">
                    {video.username[0].toUpperCase()}
                  </button>
                  <div className="show-video-user-spacer"></div>
                  <h3>{video.username}</h3>
                </div>
              </div>
          </div>
        </div>
      </div>
    );

  }
}

export default VideoShow;