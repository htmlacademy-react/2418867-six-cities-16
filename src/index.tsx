import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';

// eslint-disable-next-line react-refresh/only-export-components
const Setting = {
  NumberRentals: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App numberRentals={Setting.NumberRentals}></App>
  </React.StrictMode>
);
