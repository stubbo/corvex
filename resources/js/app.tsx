import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import App from './Components/App';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.MIX_SENTRY_LARAVEL_DSN,
  });
}

ReactDOM.render(<App />, document.getElementById('app'));
