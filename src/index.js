import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();



// const citrus = ["Lime", "Orange", "Lemon"];
// const fruits = ["Apple", "Melon", "Grapes", "Mango", ...citrus];

// const namePage = {
//   firstName: "Sania",
//   lastNAme: "Singh"
// };

// const ID = {
//   ...namePage,
//   age: "22",
//   home: "bihar"
// }

// console.log(ID);