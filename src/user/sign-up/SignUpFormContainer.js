import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { signUp } from './signUpActions';
import { getUserSignUpLoading, getUserSignUpError, getUserSignUpSuccess } from 'reducers';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: getUserSignUpLoading(state),
    error: getUserSignUpError(state),
    success: getUserSignUpSuccess(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (form) => {
      dispatch(signUp(form));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);