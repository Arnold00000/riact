import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [deviceData, setDeviceData] = useState([]);

  useEffect(() => {
    // Fetch users and device data from the backend
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('/users');
        setUsers(usersResponse.data);
        const deviceDataResponse = await axios.get('/deviceinfo');
        setDeviceData(deviceDataResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handleStatusChange = (id, status) => {
    // Update the status of the device data
    axios.put(`/deviceinfo/${id}`, { status })
      .then(response => {
        alert(response.data.message);
        setDeviceData(deviceData.map(data => data.id === id ? { ...data, status } : data));
      })
      .catch(error => {
        console.error('Error updating status', error);
      });
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      <h3>Users</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
      <h3>Device Data</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>IMEI</th>
            <th>Phone Number</th>
            <th>Complaint</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {deviceData.map(data => (
            <tr key={data.id}>
              <td>{data.username}</td>
              <td>{data.imei}</td>
              <td>{data.phonenumber}</td>
              <td>{data.complaint}</td>
              <td>{data.status}</td>
              <td className="admin-actions">
                <button onClick={() => handleStatusChange(data.id, 'pending')}>Mark as Pending</button>
                <button className="resolved" onClick={() => handleStatusChange(data.id, 'resolved')}>Mark as Resolved</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
