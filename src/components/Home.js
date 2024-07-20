import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/images/ucclogo.jpeg" alt="Logo" className="logo"/>
          <span className="system-name">UCC DEVICE ASSISTANT</span>
        </div>
        <div className="navbar-right">
          <Link to="/userRegister" className="nav-link">User Register</Link>
          <Link to="/userLogin" className="nav-link">User Login</Link>
          <Link to="/adminLogin" className="nav-link">Admin Login</Link>
        </div>
      </nav>
      
      <div className="home-container">
        <h1 className="home-title">Welcome to UCC Device Tracker</h1>
        <p className="home-description">Your one-stop solution for tracking and managing devices.</p>
        
        <div className="buttons">
          <Link to="/userLogin">
            <button className="btn">User Login</button>
          </Link>
          <Link to="/userRegister">
            <button className="btn">User Register</button>
          </Link>
          <Link to="/adminLogin">
            <button className="btn">Admin Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
