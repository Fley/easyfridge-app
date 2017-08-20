const locale = (state = 'en', action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return action.payload.locale;
    case 'RESET_LOCALE':
      return 'en';
    default:
      return state;
  }
};

export default locale;

// Selector
export const getLocale = state => state;