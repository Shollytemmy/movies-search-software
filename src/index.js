import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ShowsState } from './context/shows/ShowsState';
import { AlertsState } from './context/alert/AlertsState';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShowsState>
    <AlertsState>
    
    <App />
    </AlertsState>

  </ShowsState>
);


