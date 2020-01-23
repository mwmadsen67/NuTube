import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  goProfile() {
    this.props.history.push(`/profile/${this.props.userId}`)
  }
  
  handleSubmit() {
    e.preventDefault();

    this.setState({
      loading: true
    });

    const user = {
      id: this.props.userId,
      username: this.state.username,
      image: this.state.imageUrl,
      banner: this.state.bannerUrl
    };

    this.props.updateUser(user).then(() => this.goProfile());
  }

  render() {
    let user = this.props.user;
    if (!user) return null;

    return (
      <div>
        <Header />
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="user[username]"/>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(ProfileEdit);