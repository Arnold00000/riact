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
          <div className="dropdown">
            <button className="dropbtn">About Us</button>
            <div className="dropdown-content">
              <Link to="/about">Our Mission</Link>
              <Link to="/about">Our Team</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Services</button>
            <div className="dropdown-content">
              <Link to="/about">Device Tracking</Link>
              <Link to="/about">Device Management</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Contact Us</button>
            <div className="dropdown-content">
              <Link to="/about">Contact Information</Link>
              <Link to="/about">Support</Link>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="home-container">
        <div className="home-left">
          <h1 className="home-title">Welcome to UCC Device Assistant</h1>
          <p className="home-description">Your one-stop solution for tracking and managing devices.</p>
          <Link to="/userLogin">
            <button className="btn-get-started">GET STARTED</button>
          </Link>
        </div>
        
        <div className="home-right">
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
    </div>
  );
};

export default Home;
