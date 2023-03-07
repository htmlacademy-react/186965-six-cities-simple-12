import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const AppSettings = {
  UserEmail: 'Oliver.conner@gmail.com'
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App userEmail={AppSettings.UserEmail} />
  </React.StrictMode>,
);
