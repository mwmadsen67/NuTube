import React from 'react';
import Header from '../header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoIndexContainer from '../videos/video_index_container';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.props.fetchUser(this.props.userId);
    }
  }

  render() {
    let user = this.props.user;
    if(!user) return null;

    const customizeBtn = (this.props.currentUser && (this.props.currentUser.id === user.id)) ? (
      <button className="prof-btn">CUSTOMIZE PROFILE</button>
    ) : (<div style={{width: "125px"}}></div>);

    const videos =  <VideoIndexContainer indexType="profile" userId={this.props.userId} />

    return(
      <div className="prof">
        <Header/>
        <div className="prof-top-spacer"></div>
        <div className="prof-container">
          <div className="prof-banner">
            <img src={user.banner} />
          </div>
          <div className="prof-info">
            <div className="prof-info2">
              <div className="prof-pic">
                <img src={user.image} />
              </div>
              <h2>{user.username}</h2>
            </div>
            <div className="prof-btn-container">
              {customizeBtn}
            </div>
          </div>
          <div className="prof-video-index">
            <h3>Uploads</h3>
            {videos}
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
