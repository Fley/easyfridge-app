export const changeLocale = (locale) => (dispatch, getState) => {
  dispatch({
    type: 'CHANGE_LOCALE',
    payload: {
      locale
    }
  });
};

export const resetLocale = () => (dispatch, getState) => {
  dispatch({
    type: 'RESET_LOCALE',
  });
};