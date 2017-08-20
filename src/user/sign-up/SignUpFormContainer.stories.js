import React from 'react';

import { storiesOf } from '@storybook/react';
import SignUpFormContainer from './SignUpFormContainer';
import { BrowserRouter as Router } from 'react-router-dom';

import 'user/api-mock';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from 'reducers/configureStore';
const store = configureStore();


storiesOf('user.signup.SignUpFormContainer', module)
  .addDecorator(story => (
    <Router>
      <ReduxProvider store={store}>
        {story()}
      </ReduxProvider>
    </Router>
  ))
  .add('Empty', () => <SignUpFormContainer />)
  .add('with values', () => <SignUpFormContainer
    firstname="Georges"
    lastname="Denbrough"
    email="georges@denbrough.it"
    userid="gdenbrough"
  />);