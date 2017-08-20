import React from 'react';

import { storiesOf } from '@storybook/react';

import Alert from './Alert';


storiesOf('components.alert.Alert', module)
  .add('dismissible', () =>
    <Alert dismissible>
      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </Alert>
  )
  .add('dismissible animate', () =>
    <Alert dismissible animate>
      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </Alert>
  )
  .add('level danger', () =>
    <Alert level="danger">
      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </Alert>
  );