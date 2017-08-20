import React from 'react';

import { storiesOf } from '@storybook/react';

import Navigation from './Navigation';

import { BrowserRouter as Router } from 'react-router-dom';


storiesOf('shell.navigation.Navigation', module)
  .addDecorator(story => (
    <Router>
      {story()}
    </Router>
  ))
  .add('Not Authenticated', () => <Navigation />)
  .add('Authenticated', () => <Navigation authenticated />);