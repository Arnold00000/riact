import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/images/logo1.jpeg" alt="Logo" className="logo"/>
          <span className="system-name">UCC DEVICE ASSISTANT</span>
        </div>
        <div className="navbar-right">
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
      </nav>
      
      <div className="home-container">
        <h1 className="home-title">Welcome to UCC Device Assistant</h1>
        <p className="home-description">Your one-stop solution for tracking and managing devices.</p>
        
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          className="carousel"
        >
          <div>
            <img src="/images/track1.jpeg" alt="Feature 1" />
            <p className="legend">Track your devices effortlessly</p>
          </div>
          <div>
            <img src="/images/secure1.jpeg" alt="Feature 2" />
            <p className="legend">Manage your device information securely</p>
          </div>
          <div>
            <img src="/images/manage.jpeg" alt="Feature 3" />
            <p className="legend">Get real-time updates on device status</p>
          </div>
        </Carousel>
        
      </div>
    </div>
  );
};

export default Home;
