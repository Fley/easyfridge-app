import { combineReducers } from 'redux';
import signUp, * as fromSignUp from './sign-up/reducers';

const reducer = combineReducers({
  signUp
});

const userReducer = (state, action) => {
  return reducer(state, action);
};

export default userReducer;

// Selectors
// sign-up
export const getSignUpLoading = state => fromSignUp.getLoading(state.signUp);
export const getSignUpError = state => fromSignUp.getError(state.signUp);
export const getSignUpSuccess = state => fromSignUp.getSuccess(state.signUp);