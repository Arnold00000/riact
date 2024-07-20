import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/UserRegister.css';

export default function RegisterUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const [notification, setNotification] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:5000/userRegister', inputs).then(function (response) {
      console.log(response.data);
      setNotification("User successfully registered!");
      setTimeout(() => {
        setNotification("");
        navigate('/userLogin');
      }, 3000);  // Redirect after 3 seconds
    }).catch(function (error) {
      console.error('There was an error registering the user!', error);
      setNotification("Failed to register user.");
    });
  }

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

  const registerContainerStyle = {
    zIndex: 2,
    position: 'relative',
  };

  return (
    <div style={backgroundStyle}>
      <div style={backgroundOverlayStyle}></div>
      <div className="register-container" style={registerContainerStyle}>
        <h2>Register User</h2>
        {notification && <div className={`alert ${notification.includes("successfully") ? "alert-success" : "alert-danger"}`}>{notification}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" name="username" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" name="email" onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
