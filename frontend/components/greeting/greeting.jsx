import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAddressCard, FaUsers, FaSignOutAlt, FaSign } from 'react-icons/fa'


const Greeting = ({ currentUser, signout }) => {
  const signInLink = () => (
    <div className="greeting-signin">
      <div className="greeting-spacer"></div>
      <Link to="/signin">SIGN IN</Link>
    </div>
  );
  const userGreeting = () => (
    <div className="greeting-user">
      <button className="greeting-user-btn" onClick={signout}>
        {currentUser.username[0].toUpperCase()}
      </button>
      <div className="greeting-dropdown">
        <div className="dropdown-top">
          <div className="img-holder">
            <img src={currentUser.image} />
          </div>
          <div className="dropdown-top-content">
            <h2>{currentUser.username}</h2>
            <h3>{currentUser.email}</h3>
            <Link to={`/profile/${currentUser.id}/edit`}>Manage your NuTube Account</Link>
          </div>
        </div>
        <div className="dropdown-bottom">
          <div className="dropdown-item">
            <FaAddressCard />
            Your channel
            </div>
          <div className="dropdown-item">
            <FaUsers />
              Switch accounts
            </div>
          <div className="dropdown-item">
            <FaSignOutAlt />
              Sign out
            </div>
        </div>
      </div>
    </div>
  );
  return currentUser ? userGreeting() : signInLink();
};

export default Greeting;