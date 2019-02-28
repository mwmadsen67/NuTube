import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, signout }) => {
  const signInLink = () => (
    <div className="signin">
      <Link to="/signin">SIGN IN</Link>
    </div>
  );
  const userGreeting = () => (
    <div className="user">
      <button className="user-btn" onClick={signout}>
        {currentUser.username[0].toUpperCase()}
      </button>
    </div>
  );
  return currentUser ? userGreeting() : signInLink();
};

export default Greeting;