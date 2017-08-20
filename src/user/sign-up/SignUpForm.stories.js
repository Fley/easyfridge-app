import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router } from 'react-router-dom';

import SignUpForm from './SignUpForm';


storiesOf('user.signup.SignUpForm', module)
  .addDecorator(story => (
    <Router>
      <div className="col-12">
        <div className="card">
          <div className="card-block">
            <h1 className="card-title">Create an account</h1>
            <h2 className="card-subtitle mb-2 text-muted">...and start using your awesome fridge</h2>
            {story()}
          </div>
        </div>
      </div>
    </Router>
  ))
  .add('Empty', () => <SignUpForm onSubmit={action('submit')} />)
  .add('with values', () => <SignUpForm
    firstname="Georges"
    lastname="Denbrough"
    email="georges@denbrough.it"
    userid="gdenbrough"
    onSubmit={action('submit')}
  />)
  .add('loading', () => <SignUpForm
    loading={true}
    firstname="Georges"
    lastname="Denbrough"
    email="georges@denbrough.it"
    userid="gdenbrough"
    onSubmit={action('submit')}
  />)
  .add('error', () => <SignUpForm
    error="An unexpected error occured"
    firstname="Georges"
    lastname="Denbrough"
    email="georges@denbrough.it"
    userid="gdenbrough"
    onSubmit={action('submit')}
  />)
  .add('success', () => <SignUpForm
    success={true}
    firstname="Georges"
    lastname="Denbrough"
    email="georges@denbrough.it"
    userid="gdenbrough"
    onSubmit={action('submit')}
  />);