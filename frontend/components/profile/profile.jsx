import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    let user = this.props.user;
    if(!user) return null;
    console.dir(user)

    return(
      <div>
        <Header/>
        <div>
          <img src={user.banner} />
        </div>
        <div>
          <img src={user.image} />

        </div>
        <div>
          {user.username}
        </div>
      </div>
    )
  }
}

export default Profile;
