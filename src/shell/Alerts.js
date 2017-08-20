import React from 'react';
import Alert from 'components/alert/Alert';
import { FormattedMessage } from 'react-intl';

const Alerts = () => {
  return (
    <div className="col-12 p-0">
      {
        process.env.NODE_ENV !== 'production' &&
        <Alert className="col-12 m-0 py-2 text-center" level="info">
          <FormattedMessage
            id="shell.alerts.environment"
            defaultMessage="This is a {environment} environment !"
            values={{ environment: <strong>{process.env.NODE_ENV}</strong> }} />
        </Alert>
      }
    </div>
  );
};

export default Alerts;