import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sobre from './pages/Sobre';
import Cadastro from './pages/Cadastro';
import Dashboard from './pages/Dashboard';

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
  ,
  {
    path:"sobre",
    element:<Sobre />
  }
  ,
  {
    path:"cadastro",
    element:<Cadastro />
  }
  ,
  {
    path:"dashboard",
    element:<Dashboard />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
