import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PageContextProvider } from './contextApi/PageContext';
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './Redux/store';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter
} from "react-router-dom";

const data = ReactDOM.createRoot(document.getElementById('root'));
data.render(
  <React.StrictMode>
  <ReduxProvider store={store}>
  
  <BrowserRouter>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </BrowserRouter>
  
  </ReduxProvider>
  </React.StrictMode>
);

reportWebVitals();
