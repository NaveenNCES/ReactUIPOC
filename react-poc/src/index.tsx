import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './component/LoginPageComponent/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './component/HomePageComponent/HomePage';
import SignUpPage from './component/SignUpPageComponent/SignUpPage';
import React from 'react';
import NavBar from './component/NavBar/NavBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/navBar' element={<NavBar />} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
