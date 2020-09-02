import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faVideo, faBars, faSpinner, faSearch, faThumbsUp, faThumbsDown, faArrowAltCircleUp as fasArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';
// import { faArrowAltCircleUp as farArrowAltCircleUp} from '@fortawesome/free-regular-svg-icons';

// library.add(faVideo, faBars, faSpinner, faSearch, faThumbsUp, faThumbsDown, fasArrowAltCircleUp, farArrowAltCircleUp);

import SigninFormContainer from './signin/signin_form_container';
import SignupFormContainer from './signin/signup_form_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import VideoNewContainer from './videos/video_new_container';
import VideoEditContainer from './videos/video_edit_container';
import ProfileContainer from './profile/profile_container';
import ProfileEditContainer from './profile/profile_edit_container';
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/pro_route_util';

const App = () => (
  <div className="body">
    <Switch>
      <AuthRoute exact path='/signin' component={SigninFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <ProtectedRoute exact path='/new' component={VideoNewContainer} />
      <ProtectedRoute path='/:videoId/edit' component={VideoEditContainer} />
      <ProtectedRoute path="/profile/:userId/edit" component={ProfileEditContainer} />
      <Route path='/profile/:userId' component={ProfileContainer} />
      <Route path='/:videoId' component={VideoShowContainer} />
      <Route exact path='/' render={(props) => <VideoIndexContainer {...props} indexType="main" />} />
      {/* <Route render={() => <Redirect to={{pathname: '/'}} />} /> */}
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;