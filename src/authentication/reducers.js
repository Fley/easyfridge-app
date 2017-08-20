import { combineReducers } from 'redux';
import signIn, * as fromSignIn from './sign-in/reducers';
import { extractPayload, isTokenValid } from './api';

const token = (state = { raw: null, payload: {} }, action) => {
  switch (action.type) {
    case 'AUTHENTICATION_REFRESHED':
    case 'AUTHENTICATION_SIGNED_IN':
      const rawToken = action.payload.token;
      return { raw: rawToken, payload: extractPayload(rawToken) };
    case 'AUTHENTICATION_SIGNING_IN':
    case 'AUTHENTICATION_SIGN_IN_ERROR':
    case 'AUTHENTICATION_SIGNED_OUT':
      return null;
    default:
      return state;
  }
};

const reducer = combineReducers({
  token,
  signIn
});

const userReducer = (state, action) => {
  return reducer(state, action);
};

export default userReducer;

// Selectors
export const getToken = state => state.token.raw;
export const isAuthenticated = state => isTokenValid(state.token.payload);
export const getPayload = state => state.token.payload;
// sign-in
export const getSignInLoading = state => fromSignIn.getLoading(state.signIn);
export const getSignInError = state => fromSignIn.getError(state.signIn);
export const getSignInSuccess = state => fromSignIn.getSuccess(state.signIn);