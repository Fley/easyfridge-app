import React from 'react';
import classnames from 'classnames';
import NavLink from './NavLink';
import { FormattedMessage } from 'react-intl';
import 'theme/material-design-icons';

const Navigation = ({ authenticated = false }) => {
  return (
    <nav className="navbar navbar-toggleable-xl navbar-inverse bg-primary col-12">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div></div>
        <a className={classnames('navbar-brand', { 'hidden-sm-down': authenticated })} href="/">Easyfridge</a>
        {
          authenticated ?
            <div className="mr-auto col-sm col-12">
              <ul className="navbar-nav hidden-sm-down">
                <NavLink to="/my-fridge">
                  <i className="material-icons md-24 pr-1">kitchen</i>
                  <span className="hidden-sm-down">
                    <FormattedMessage id="shell.navigation.myFridge" defaultMessage="My fridge" />
                  </span>
                </NavLink>
                <NavLink to="/recipes">
                  <i className="material-icons md-24 pr-1">local_dining</i>
                  <span className="hidden-sm-down">
                    <FormattedMessage id="shell.navigation.recipes" defaultMessage="Let's cook" />
                  </span>
                </NavLink>
                <NavLink to="/my-shopping-list">
                  <i className="material-icons md-24 pr-1">shopping_basket</i>
                  <span className="hidden-sm-down">
                    <FormattedMessage id="shell.navigation.myShoppingList" defaultMessage="My shopping list" />
                  </span>
                </NavLink>
              </ul>
              <ul className="navbar-nav col-12 hidden-md-up">
                <NavLink to="/my-fridge" className="col-3">
                  <i className="material-icons md-24 pr-1 mx-auto">kitchen</i>
                </NavLink>
                <NavLink to="/recipes" className="col-3">
                  <i className="material-icons md-24 pr-1 mx-auto">local_dining</i>
                </NavLink>
                <NavLink to="/my-shopping-list" className="col-3">
                  <i className="material-icons md-24 pr-1 mx-auto">shopping_basket</i>
                </NavLink>
                <NavLink to="/settings" className="col-3">
                  <i className="material-icons md-24 pr-1 mx-auto">settings</i>
                </NavLink>
              </ul>
            </div> :
            <ul className="navbar-nav mr-auto"></ul>
        }

        {
          authenticated ?
            <ul className="navbar-nav navbar-right hidden-sm-down">
              <NavLink to="/settings">
                <i className="material-icons md-24 pr-1">settings</i>
                <span>
                  <FormattedMessage id="shell.navigation.settings" defaultMessage="Settings" />
                </span>
              </NavLink>
              <NavLink to="/sign-out">
                <i className="material-icons md-24 pr-1">power_settings_new</i>
                <span>
                  <FormattedMessage id="shell.navigation.signOut" defaultMessage="Sign out" />
                </span>
              </NavLink>
            </ul> :
            <ul className="navbar-nav navbar-right">
              <NavLink to="/sign-up">
                <i className="material-icons md-24 pr-1">person_add</i>
                <span className="hidden-sm-down">
                  <FormattedMessage id="shell.navigation.signUp" defaultMessage="Sign up" />
                </span>
              </NavLink>
              <NavLink to="/sign-in">
                <i className="material-icons md-24 pr-1">power_settings_new</i>
                <span className="hidden-sm-down">
                  <FormattedMessage id="shell.navigation.signIn" defaultMessage="Sign in" />
                </span>
              </NavLink>
            </ul>
        }
      </div>

    </nav>
  );
};

export default Navigation;