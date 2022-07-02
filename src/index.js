import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {TransactionProvider} from './context/TransactionContex'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionProvider >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TransactionProvider>
)
