import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';//Mean </App /> './App' = 파일 위치(App.js를 의미한다.)
import reportWebVitals from './reportWebVitals';
//npm start 시 index.js를 찾음 -> index.js는 입구이다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
