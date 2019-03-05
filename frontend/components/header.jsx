import React from 'react';
import { withRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.videoClick = this.videoClick.bind(this);
  }
  
  handleClick(){
    this.props.history.push(`/`);
  }

  videoClick(){
    this.props.history.push('/new');
  }

  render() {
    return(
      <div className="header">
        <div className="header-container">
          <div className="left-header-container">
            <FontAwesomeIcon icon="bars" size="lg" color="white" />
            {/* <img className="header-bars" id='bars' src={window.images.bars} width="24" height="24" /> */}
            <div className="header-left-space"></div>
            <div className="left-header-button" onClick={this.handleClick}>
              <img id='logo' src={window.images.logo} width="30" height="21"/>
              &nbsp;
              <h1 className="header-logo-text">NuTube</h1>
            </div>
            <div className="header-left-space"></div>            
          </div>
          <div className="search-container">
            <input className="search-bar" type="input" placeholder="Search" />
            <button className="search-button"></button>
          </div>
          <div className="right-header-container">
            <div className="header-upload" onClick={this.videoClick}>
              <FontAwesomeIcon icon="video" size="lg" color="white" />
              {/* <img className="header-vidup" id="video_add" src={window.images.video_add} width="48" height="48" /> */}
            </div>
            <div className="header-right-vid-spacer"></div>
            <GreetingContainer /> 
            <div className="header-right-space"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);