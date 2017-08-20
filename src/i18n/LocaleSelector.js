import React from 'react';
import { connect } from 'react-redux';
import { changeLocale } from './i18nActions';
import { getLocale } from 'reducers';

const availableLocales = [
  { locale: 'en', label: 'English' },
  { locale: 'fr', label: 'Français' }
];

const LocaleSelector = ({ locale, availableLocales, changeLocale, id, className }) => {
  return (
    <select value={locale} className={'form-control form-control-sm ' + className} onChange={e => changeLocale(e.target.value)} id={id}>
      {availableLocales.map(e => <option key={e.locale} value={e.locale}>{e.label}</option>)}
    </select>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    locale: getLocale(state),
    availableLocales
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeLocale: (locale) => {
      dispatch(changeLocale(locale));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSelector);