import React from 'react';

import { storiesOf } from '@storybook/react';

import Shell from './Shell';

import { BrowserRouter as Router } from 'react-router-dom';


storiesOf('shell.Shell', module)
  .addDecorator(story => (
    <Router>
      {story()}
    </Router>
  ))
  .add('Shell', () => <Shell />);