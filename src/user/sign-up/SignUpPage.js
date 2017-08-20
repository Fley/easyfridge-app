import React from 'react';
import { FormattedMessage } from 'react-intl';

import SignUpForm from './SignUpFormContainer';

const SignUpPage = () => {
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-block">
          <h1 className="card-title">
            <FormattedMessage id="user.sign-up.signUpPage.title" defaultMessage="Create an account" />
          </h1>
          <h2 className="card-subtitle mb-2 text-muted">
            <FormattedMessage
              id="user.sign-up.signUpPage.subtitle"
              defaultMessage="...and start using your awesome fridge" />
          </h2>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;