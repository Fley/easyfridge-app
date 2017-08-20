import React, { Component } from 'react';
import Shell from 'shell/Shell';
import Theme from 'theme/Theme';

import IntlProvider from 'i18n/IntlProvider';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from 'reducers/configureStore';
const store = configureStore();


async function loadMessages(locale) {
  return await import('i18n/messages-' + locale);
}

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <IntlProvider loadMessages={loadMessages}>
          <Theme>
            <Shell />
          </Theme>
        </IntlProvider>
      </ReduxProvider>
    );
  }
}

export default App;
