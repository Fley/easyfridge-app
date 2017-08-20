import React from 'react';
import { FormattedMessage } from 'react-intl';
import Navigation from './navigation/Navigation';
import Alerts from './Alerts';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../home/HomePage';
import SignUpForm from '../user/sign-up/SignUpPage';
import NotFoundPage from './errors/NotFoundPage';
import LocaleSelector from 'i18n/LocaleSelector';

const Shell = () => {
  return (
    <Router>
      <div>
        <div className="row col=12 sticky-top">
          <Alerts />
          <Navigation />
        </div>

        <div className="container-fluid">
          <div className="row mx-md-auto py-4 col-md-8">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/sign-up" component={SignUpForm} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <div className="row mx-md-auto py-4 col-md-8">
            <div>
              <form className="form-inline">
                <label htmlFor="inlineFormInputName2">
                  <FormattedMessage id="shell.languageSelector.label" defaultMessage="Select your language" />
                </label>
                <LocaleSelector className="ml-1" id="selectYourLanguage" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Shell;