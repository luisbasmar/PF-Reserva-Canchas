/** @format */

import './App.css';
import '../src/styles/index.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { loginGoogle } from '../src/redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const userSigned = useSelector(state => state.signUpData);

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then(response => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed!');
        })
        .then(resObject => {
          setUser(resObject.user);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div className="App">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
