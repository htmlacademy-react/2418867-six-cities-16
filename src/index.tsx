import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';
import { offers } from './mocks/offers';
import { Setting } from './const';
import { favorites } from './types/favorites';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      numberRentals={Setting.NumberRentals}
      offers={offers}
      favorites={favorites}
    >
    </App>
  </React.StrictMode>
);
