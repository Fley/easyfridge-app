import React from 'react';
import classnames from 'classnames';

const Alert = ({ dismissible, level = 'primary', animate, children, className }) => {
  return (
    <div className={classnames('alert', 'alert-' + level, className, {
      'alert-dismissible': dismissible,
      'fade show': animate
    })} role="alert" >
      {dismissible &&
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      }
      {children}
    </div>
  );
};

export default Alert;