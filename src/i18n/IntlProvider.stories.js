import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import IntlProvider from './IntlProvider';
import { FormattedMessage } from 'react-intl';
import { changeLocale } from './i18nActions';

import { Provider as ReduxProvider, connect } from 'react-redux';
import configureStore from 'reducers/configureStore';
const store = configureStore();


class ButtonChangeLocale extends Component {
  constructor(props) {
    super(props);
    this.state = { locale: 'en' };

    this.changeLocale = this.changeLocale.bind(this);
  }

  changeLocale() {
    this.setState({ locale: this.state.locale === 'en' ? 'fr' : 'en' });
    this.props.changeLocale(this.state.locale);
  }

  render() {
    return (
      <button onClick={this.changeLocale.bind(this)}>
        {this.state.locale}
      </button>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeLocale: (locale) => {
      dispatch(changeLocale(locale));
    }
  };
};

const ButtonChangeLocaleContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonChangeLocale);

async function loadMessages(locale) {
  return await import('./messages-' + locale);
}

storiesOf('i18n.IntlProvider', module)
  .addDecorator(story => (
    <ReduxProvider store={store}>
      <div>
        <div style={{ width: '100%' }}>
          {story()}
        </div>
        <ButtonChangeLocaleContainer />
      </div>
    </ReduxProvider>
  ))
  .add('IntlProvider', () =>
    <IntlProvider loadMessages={loadMessages}>
      <FormattedMessage
        id='shell.navigation.myFridge'
        description='Greeting to welcome the user to the app'
        defaultMessage='Error No translation found !'
      />
    </IntlProvider>
  );