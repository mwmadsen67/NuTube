import React from 'react';
import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = state => {

  return({
    errors: state.errors.session,
    formType: 'Create your NuTube Account',
    navLink: <Link to='/signin'>Sign in instead</Link>
  });
};

const mapDispatchToProps = dispatch => {
  return({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);