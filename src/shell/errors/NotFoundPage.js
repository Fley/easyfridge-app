import React from 'react';
import { FormattedMessage } from 'react-intl';

const NotFoundPage = ({ location }) => {
  return (
    <div className="col-12">
      <div>
        <div className="jumbotron bg-inverse text-white text-center">
          <h1><FormattedMessage id="shell.errors.notFound.title" defaultMessage="Not found !" /></h1>
          <p className="lead">
            <FormattedMessage
              id="shell.errors.notFound.pageNotFount"
              defaultMessage="Not found !"
              values={{ page: <code>{location.pathname}</code> }}
            />
          </p>
          <hr className="my-4" />
          <p>
            <FormattedMessage
              id="shell.errors.notFound.contact"
              defaultMessage="If you think this is an issue, please contact us." />
          </p>
          <p className="lead">
            <button className="btn btn-secondary btn-lg" onClick={e => window.history.back()}>
              <FormattedMessage id="shell.errors.notFound.goBack" defaultMessage="Get me back" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;