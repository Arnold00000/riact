import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserPage from './components/UserPage';
import AdminDashboard from './components/AdminDashboard';

import UserRegister from './components/UserRegister';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userLogin" element={<UserPage />} />
          <Route path="/userRegister" element={<UserRegister />} />



          <Route path="/adminLogin" element={<AdminDashboard />} />
          <Route path="/adminRegister" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
