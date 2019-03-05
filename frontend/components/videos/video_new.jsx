import React from 'react';
import Header from '../header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VideoNew = () => (
  <div className="new-video-container">
    <Header />
    <div className="new-upper-spacer"></div>
    <div className="new-lower-video-container">
      {/* <div className="new-left-spacer"></div> */}
      <div className="new-inner-upload-container">
        <div className="new-upload">
          <div className="new-video-upload-btn-container">
            <FontAwesomeIcon className="new-video-upload-btn" icon="arrow-alt-circle-up" size="4x" color="white" />
            <h3>Select video to upload</h3>
          </div>
          <div className="upload-spacer"></div>
          <div className="new-video-upload-btn-container">
            <FontAwesomeIcon className="new-video-upload-btn" icon={['far', 'arrow-alt-circle-up']} size="4x" color="white" />
            <h3>Select preview image</h3>
          </div>
          {/* <div className="new-video-upload-img"></div> */}
          {/* <img className="new-video-upload-img" id="white_upload_vid" src={window.images.white_upload_vid} width="96" height="96" /> */}
        </div>
      </div>
    </div>
  </div>
)

export default VideoNew;