import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, logout }) => {

  if( currentUser ) {
    return (
      <div>
        Welcome, {currentUser ? currentUser.username : ''}!
        <button onClick={logout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to={'/signup'}>Sign Up</Link> | <Link to={'/login'}>Log In</Link>
      </div>
    );
  }
}

export default Greeting;
