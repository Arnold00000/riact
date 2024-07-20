import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
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
  );
};

export default Home;


 /* <Link to="/adminRegister">
          <button className="btn">Admin Register</button>
        </Link> */