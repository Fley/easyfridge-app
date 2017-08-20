import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import classnames from 'classnames';

const NavLinkCustom = ({ to, children, className, ...rest }) => {
  return (
    <Route
      path={to}
      children={({ location, match }) => {
        return (
          <li className={classnames('nav-item', { 'active': !!match }, className)}>
            <NavLink to={to} className="nav-link" {...rest}>
              {children} {match && <span className="sr-only">(current)</span>}
            </NavLink>
          </li>
        );
      }} />
  );
};

export default NavLinkCustom;