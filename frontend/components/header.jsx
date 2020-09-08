import React from 'react';
import { withRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaSearch, FaVideo } from 'react-icons/fa';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
    this.handleClick = this.handleClick.bind(this);
    this.videoClick = this.videoClick.bind(this);
    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleClick(){
    this.props.history.push(`/`);
  }

  videoClick(){
    this.props.history.push('/new');
  }

  update(e) {
    this.setState({query: e.currentTarget.value})
  }

  handleSearch(e) {
    e.preventDefault()
    this.props.search(this.state.query)
  }

  render() {
    return(
      <div className="header">
        <div className="header-container">
          <div className="left-header-container">
            <FaBars size="lg" color="white"/>
            <div className="header-left-space"></div>
            <div className="left-header-button" onClick={this.handleClick}>
              <img id='logo' src={window.images.logo} width="30" height="21"/>
              &nbsp;
              <h1 className="header-logo-text">NuTube</h1>
            </div>
            <div className="header-left-space"></div>            
          </div>
          <form className="search-container" onSubmit={this.handleSearch} >
            <input className="search-bar" type="text" placeholder="Search" value={this.state.query} onChange={this.update} />
            <button className="search-button" type="submit">
              <FaSearch size="lg" color="rgb(100, 100, 100)" />
            </button>
          </form>
          <div className="right-header-container">
            <div className="header-upload" onClick={this.videoClick}>
              <FaVideo size="lg" color="white" />
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