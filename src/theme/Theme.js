import React from 'react';

import 'daemonite-material/css/material.css';
import jQuery from 'jquery';
global.$ = global.jQuery = jQuery;
global.Tether = require('tether');
require('bootstrap');
require('daemonite-material/js/material');

const Theme = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Theme;