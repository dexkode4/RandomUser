import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { UserContextProvider } from './context/userContext';

ReactDOM.render(
  <UserContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserContextProvider>,
  document.getElementById('root')
);
