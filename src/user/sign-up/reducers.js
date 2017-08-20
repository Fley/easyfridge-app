const userReducer = (state = { loading: false, error: null }, action) => {
  switch (action.type) {
    case 'USER_SIGNING_UP':
      return { ...state, loading: true, success: null };
    case 'USER_SIGNED_UP':
      return { loading: false, error: null, success: true };
    case 'USER_SIGNED_UP_ERROR':
      return { loading: false, error: action.error, success: false };
    default:
      return state;
  }
};

export default userReducer;

// Selectors
// sign-up
export const getLoading = state => state.loading;
export const getError = state => state.error;
export const getSuccess = state => state.success;