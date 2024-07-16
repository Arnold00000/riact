import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserPage from './components/UserPage';
import AdminDashboard from './components/AdminDashboard';

import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin';


import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/userRegister" element={<UserRegister />} />
          <Route path="/userPage" element={<UserPage />} />




          <Route path="/adminLogin" element={<AdminDashboard />} />
          <Route path="/adminRegister" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
