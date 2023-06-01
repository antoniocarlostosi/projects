import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewTruck from './Forms/NewTruck';
import DeleteTruck from './Forms/DeleteTruck';
import NewPerson from './Forms/NewPerson';
import DeletePerson from './Forms/DeletePerson';

const router = createBrowserRouter([
  { path: "/", element: <App />, },  
  { path: "newtruck", element: <NewTruck />, },
  { path: "deltruck", element: <DeleteTruck />, },
  { path: "newperson", element: <NewPerson />, },
  { path: "delperson", element: <DeletePerson />, }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
