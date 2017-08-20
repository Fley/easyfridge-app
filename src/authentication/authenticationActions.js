import { authenticate } from 'authentication/api';
import { extractPayload, isTokenValid } from './api';

let signInRequest;
export const signIn = ({ email, password }) => (dispatch, getState) => {
  signInRequest && signInRequest.abort();
  dispatch({
    type: 'AUTHENTICATION_SIGNING_IN',
    payload: {
      email
    }
  });
  signInRequest = authenticate({ email, password });
  signInRequest.then(response => {
    const { token } = response.body;
    const payload = extractPayload(token);
    isTokenValid(payload) ?
      dispatch({
        type: 'AUTHENTICATION_SIGNED_IN',
        payload: {
          token,
          payload
        }
      }) :
      dispatch({
        type: 'AUTHENTICATION_SIGN_IN_ERROR',
        error: 'Invalid athentication token received',
        payload: {
          email
        }
      });
  }).catch(error => {
    dispatch({
      type: 'AUTHENTICATION_SIGN_IN_ERROR',
      error,
      payload: {
        email
      }
    });
  });
};

export const signOut = () => (dispatch, getState) => {
  dispatch({
    type: 'AUTHENTICATION_SIGNED_OUT'
  });
};

export const refreshAuthenticationToken = (token) => (dispatch, getState) => {
  const payload = extractPayload(token);
  isTokenValid(payload) ?
    dispatch({
      type: 'AUTHENTICATION_REFRESHED',
      payload: {
        token
      }
    }) :
    dispatch({
      type: 'AUTHENTICATION_INVALID_TOKEN',
      payload: {
        token
      }
    })
};