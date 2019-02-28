import React from 'react';
import { Route } from 'react-router-dom';

import Header from './header';
import SigninFormContainer from './signin/signin_form_container';
import SignupFormContainer from './signin/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="body">
    <Route exact path='/' component={Header}/>
    <AuthRoute exact path='/signin' component={SigninFormContainer} />
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;