import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import App from './Components/App';

import AuthService, {AuthService as AuthClass} from 'Services/AuthService';
import RouteService, {RouteService as RouterClass} from 'Services/RouteService';

declare global {
  interface Window {
    auth?: AuthClass;
    router?: RouterClass;
  }
}

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.MIX_SENTRY_LARAVEL_DSN,
  });
} else {
  window.auth = AuthService;
  window.router = RouteService;
}

ReactDOM.render(<App/>, document.getElementById('app'));
