import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';
import { favorites } from './mocks/favorites';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const setupStore = store();

root.render(
  <React.StrictMode>
    <Provider store={setupStore}>
      <App favorites={favorites}></App>
    </Provider>
  </React.StrictMode>
);
