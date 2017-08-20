import { create } from 'user/api';

let signUpRequest;
export const signUp = ({ firstname, lastname, email, password, userid }) => (dispatch, getState) => {
  signUpRequest && signUpRequest.abort();
  dispatch({
    type: 'USER_SIGNING_UP',
    payload: {
      firstname, lastname, email, userid
    }
  });
  signUpRequest = create({ firstname, lastname, email, password, userid });
  signUpRequest.then(response => {
    dispatch({
      type: 'USER_SIGNED_UP',
      payload: {
        firstname, lastname, email, userid
      },
      response
    });
  }).catch(error => {
    dispatch({
      type: 'USER_SIGNED_UP_ERROR',
      error,
      payload: {
        firstname, lastname, email, userid
      }
    });
  });
};