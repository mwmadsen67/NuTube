import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import ProfileEdit from './profile_edit';

const mapStateToProps = (state) => {
  return({
    user: state.entities.users[state.session.id]
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchUser: user => dispatch(updateUser(user)),
    updateUser: user => dispatch(updateUser(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);