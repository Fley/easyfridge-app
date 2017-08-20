import { combineReducers } from 'redux';
import user, * as fromUser from 'user/reducers';
import locale, * as fromLocale from 'i18n/reducers';

const reducer = combineReducers({
  locale,
  user
});

const rootReducer = (state, action) => {
  if (action.type === 'AUTHENTICATION_SIGNED_OUT') {
    state = undefined;
  }
  return reducer(state, action);
};

export default rootReducer;

// Selectors
// Locale
export const getLocale = state => fromLocale.getLocale(state.locale);
// User
// > sign-up
export const getUserSignUpLoading = state => fromUser.getSignUpLoading(state.user);
export const getUserSignUpError = state => fromUser.getSignUpError(state.user);
export const getUserSignUpSuccess = state => fromUser.getSignUpSuccess(state.user);
