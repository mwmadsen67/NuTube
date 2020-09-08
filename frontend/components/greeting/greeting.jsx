import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaAddressCard, FaUsers, FaSignOutAlt, FaSign } from 'react-icons/fa'


const Greeting = ({ currentUser, signout, history }) => {

  const toggleDropdown = () => {
    let ele = document.getElementById('dropdown');
    ele.classList.toggle("open");
  }
  
  const goChannel = () => {
    history.push(`/profile/${currentUser.id}`)
  }

  const goSwitch = () => {
    signout();
    history.push('/signin');
  }

  const signInLink = () => (
    <div className="greeting-signin">
      <div className="greeting-spacer"></div>
      <Link to="/signin">SIGN IN</Link>
    </div>
  );

  const userGreeting = () => (
    <div className="greeting-user">
      <button className="greeting-user-btn" onClick={toggleDropdown}>
        {currentUser.username[0].toUpperCase()}
      </button>
      <div className="greeting-dropdown" id="dropdown">
        <div className="dropdown-top ddmenu">
          <div className="img-holder">
            <img className="ddmenu" src={currentUser.image} />
          </div>
          <div className="dropdown-top-content">
            <h2 className="ddmenu">{currentUser.username}</h2>
            <h3 className="ddmenu">{currentUser.email}</h3>
            <Link to={`/profile/${currentUser.id}/edit`}>Manage your NuTube Account</Link>
          </div>
        </div>
        <div className="dropdown-bottom ddmenu">
          <div className="dropdown-item" onClick={goChannel}>
            <div>
              <FontAwesomeIcon icon="address-card" size="lg" color="white" />
            </div>
            Your channel
            </div>
          <div className="dropdown-item" onClick={goSwitch}>
            <div>
              <FontAwesomeIcon icon="users" size="lg" color="white" />
            </div>
            Switch accounts
            </div>
          <div className="dropdown-item" onClick={signout}>
            <div>
              <FontAwesomeIcon icon="sign-out-alt" size="lg" color="white" />
            </div>
            Sign out
            </div>
        </div>
      </div>
    </div>
  );
  return currentUser ? userGreeting() : signInLink();
};

export default withRouter(Greeting);