import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './header';
import SigninFormContainer from './signin/signin_form_container';
import SignupFormContainer from './signin/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="body">
    <Switch>
      <AuthRoute exact path='/signin' component={SigninFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <Route exact path='/' component={Header}/>
      <Route render={() => <Redirect to={{pathname: '/'}} />} />
    </Switch>
  </div>
);

export default App;