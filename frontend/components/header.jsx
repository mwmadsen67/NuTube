import React from 'react';
import GreetingContainer from './greeting/greeting_container';

class NavBar extends React.Component {
  
  render() {
    return(
      <div className="header">
        <div className="header-container">
          <div className="left-header-container">
            <div className="header-left-space"></div>
            <img id='logo' src={window.images.logo} width="30" height="21"/>
            &nbsp;
            <h1 className="header-logo-text">NuTube</h1>
            <div className="header-left-space"></div>            
          </div>
          <div className="search-container">
            <input className="search-bar" type="input" placeholder="Search" />
            <button className="search-button"></button>
          </div>
          <div className="right-header-container">
            <GreetingContainer /> 
            <div className="header-right-space"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;