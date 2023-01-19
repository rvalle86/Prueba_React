import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const apilondon = fetch(`https://run.mocky.io/v3/9becbdaf-4d7e-4fac-aea8-afded071c172`)
const apitegus = fetch(`https://run.mocky.io/v3/c16a14cb-ee7b-40be-a733-5d5162eaaf57`)

console.log(apilondon);
console.log(apitegus);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
