import React from 'react';
import './App.css';
import AppRouter from './Confiq/Router';

import { Provider } from 'react-redux';
import { Store } from './redux/store';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Provider store={Store}>
        <ToastContainer />
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
