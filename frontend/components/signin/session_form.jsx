import React from 'react';

class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const usernameInput = (this.props.formType === 'sign up') ? (
      <label>Username
        <input type="text" value={this.state.username} onChange={this.update('username')} />
      </label>
    ) : (
      <br/>
    );
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>NewTube</h3>
          <br/>
          <h3>Please {this.props.formType} or {this.props.navLink}</h3>
          {this.renderErrors()}
          <div>
            <br/>
            {usernameInput}
            <br/>
            <label>Email
              <input type="text" value={this.state.email} onChange={this.update('email')} />
            </label>
            <br/>
            <label>Password  
              <input type="password" value={this.state.password} onChange={this.update('password')} />
            </label>
            <br/>
            <input type="submit" value="Next" />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;