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

  return (
    <div className="register-container">
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
  );
}
