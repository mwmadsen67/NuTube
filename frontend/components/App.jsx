import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SigninFormContainer from './signin/signin_form_container';
import SignupFormContainer from './signin/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <div className="header">
      {/* <h1>NewTube</h1>
      <GreetingContainer /> */}
    </div>
    <Route exact path='/' component={GreetingContainer}/>
    <AuthRoute exact path='/signin' component={SigninFormContainer} />
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;