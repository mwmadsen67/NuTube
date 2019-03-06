import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faBars, faSpinner, faSearch, faArrowAltCircleUp as fasArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleUp as farArrowAltCircleUp} from '@fortawesome/free-regular-svg-icons';

library.add(faVideo, faBars, faSpinner, faSearch, fasArrowAltCircleUp, farArrowAltCircleUp);

import SigninFormContainer from './signin/signin_form_container';
import SignupFormContainer from './signin/signup_form_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import VideoNewContainer from './videos/video_new_container';
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/pro_route_util';

const App = () => (
  <div className="body">
    <Switch>
      <AuthRoute exact path='/signin' component={SigninFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <ProtectedRoute exact path='/new' component={VideoNewContainer} />
      <Route path='/:videoId' component={VideoShowContainer} />
      <Route exact path='/' component={VideoIndexContainer} />
      {/* <Route path='/' component={Header}/> */}
      <Route render={() => <Redirect to={{pathname: '/'}} />} />
    </Switch>
  </div>
);

export default App;