import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = state => {

  return({
    errors: state.errors.session,
    formType: 'sign in',
    navLink: <Link to='/signup'>Sign Up instead</Link>
  });
};

const mapDispatchToProps = dispatch => {
  return({
    processForm: (user) => dispatch(signin(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);