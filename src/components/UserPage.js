import React, { useState } from 'react';
import axios from 'axios';
import '../styles/UserPage.css';

const UserPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    imei: '',
    phonenumber: '',
    complaint: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/devicedata', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <div className="user-page-container">
      <h2>Submit Device Data</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imei"
          placeholder="IMEI"
          value={formData.imei}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phonenumber"
          placeholder="Phone Number"
          value={formData.phonenumber}
          onChange={handleChange}
          required
        />
        <textarea
          name="complaint"
          placeholder="Complaint"
          value={formData.complaint}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserPage;
