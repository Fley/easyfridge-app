/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import 'babel-polyfill';
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { IntlProvider } from 'react-intl';
import Theme from 'theme/Theme';

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(story => (
  <IntlProvider>
    <Theme>
      {story()}
    </Theme>
  </IntlProvider>
));


configure(loadStories, module);