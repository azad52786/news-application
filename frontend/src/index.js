import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewsPage from './component/BodyCompnent/NewsPage';
import AppProvider from './context/AppProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path : '/' , 
    element : <App/> , 
    children : [
      {
        path : '/' , 
        element : <NewsPage/>
      }
    ]
  }
])
root.render(
    <AppProvider>
    <RouterProvider router= {router} /></AppProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
