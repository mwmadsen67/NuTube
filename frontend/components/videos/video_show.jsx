import React from 'react';
import Header from '../header';

class VideoShow extends React.Component {

  componentDidMount() {
    this.props.requestVideo(this.props.videoId);
  }

  // const showVideo = requestVideo(videoId);
  // debugger
  
  render (){
    // debugger


    if (this.props.video === undefined) {
      return null;
    }

    return(
      <div className='show-video-page'>
        <Header />
        <div className='show-left-video'>
          <div className="show-top-spacer"></div>
          <div className='show-video'>
            <div className="show-left-spacer"></div>
              <video width="791" height="445" controls>
                <source src={this.props.video.videoUrl} type="video/mp4" autoPlay></source>
              </video>
              {/* <h1>{video.title}</h1> */}
          </div>
        </div>
      </div>
    );

  }
}

export default VideoShow;