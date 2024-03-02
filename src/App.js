import React from 'react';
import './App.css';
import AppRouter from './Confiq/Router';

import { Provider } from 'react-redux';
import {Store} from './redux/store';


function App() {
  return (
    <>
      <Provider store={Store}>
          <AppRouter />
      </Provider>
    </>
  );
}

export default App;
