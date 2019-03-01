import React from 'react';
import { connect } from 'react-redux';
import { signin, clearSessionErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = state => {

  return({
    errors: state.errors.session,
    formType: 'Sign in',
    navLink: <Link to='/signup'>Create account</Link>
  });
};

const mapDispatchToProps = dispatch => {
  return({
    processForm: (user) => dispatch(signin(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);