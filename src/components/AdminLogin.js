import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../styles/AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/adminLogin', inputs);
      localStorage.setItem("token", response.data.access_token);
      navigate('/AdminDashboard');
    } catch (error) {
      setError("Invalid username or password!");
      console.error('Error logging in', error);
    }
  };

  const backgroundStyle = {
    backgroundImage: 'url("/images/logo1.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  const backgroundOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white overlay
    zIndex: 1,
  };

  const loginContainerStyle = {
    zIndex: 2,
    position: 'relative',
  };

  return (
    <div style={backgroundStyle}>
      <div style={backgroundOverlayStyle}></div>
      <nav className="transparent-navbar">
        <Link to="/" className="nav-logo">
          <img src="/images/logo.png" alt="Logo" className="nav-logo-img" />
          <span className="nav-logo-text">Home</span>
        </Link>
        <div className="nav-links">
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>
      </nav>
      <div className="login-container" style={loginContainerStyle}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} required />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
