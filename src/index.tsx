import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDefaultScreen from './components/ReactDefaultScreen/ReactDefaultScreen';
import SimpleInterface from './components/SimpleInterface';
import { getCatFact } from './typescript/classic-promises/classicPromises';

const catApiUrl = 'https://catfact.ninja/fact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SimpleInterface />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
