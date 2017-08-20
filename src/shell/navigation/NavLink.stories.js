import React from 'react';
import { storiesOf } from '@storybook/react';
import NavLink from './NavLink';
import { BrowserRouter as Router } from 'react-router-dom';

const activeStyle = { backgroundColor: 'red' };

storiesOf('shell.navigation.NavLink', module)
  .addDecorator(story => (
    <Router>
      <ul className="navbar-nav navbar-right">
        {story()}
      </ul>
    </Router>
  ))
  .add('Matching', () => (
    <NavLink to="/iframe.html" activeStyle={activeStyle}>
      <i className="material-icons md-24">kitchen</i> My fridge
    </NavLink>
  ))
  .add('Not matching', () => (
    <NavLink to="/nomatch" activeStyle={activeStyle}>
      <i className="material-icons md-24">kitchen</i> My fridge
    </NavLink>
  ));