import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import App from './Components/App';

import AuthService from 'Services/AuthService';
import RouteService from 'Services/RouteService';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.MIX_SENTRY_LARAVEL_DSN,
  });
} else {
  /** @ts-ignore */
  window.appServices = {
    auth: AuthService,
    router: RouteService,
  };
}

ReactDOM.render(<App />, document.getElementById('app'));
