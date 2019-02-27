import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SigninFormContainer from './signin/signin_form_container';
import SignupFormContainer from './signin/signup_form_container';

const App = () => (
  <div>
    <div>
    <h1>NewTube</h1>
    <GreetingContainer />
    </div>

    <Route path='/signin' component={SigninFormContainer} />
    <Route path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;