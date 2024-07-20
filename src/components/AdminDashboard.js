import React, { useEffect, useState } from "react";
import axios from "axios"; //npm install axios --save 
import { Link } from 'react-router-dom';
import '../styles/AdminDashboard.css'; // Import the CSS file

export default function AdminDashboard() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('http://127.0.0.1:5000/deviceinformation').then(function(response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`http://127.0.0.1:5000/datadelete/${id}`).then(function(response) {
      console.log(response.data);
      getUsers();
    });
    alert("Successfully Deleted");
  }

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="header">
          <Link to="/userPage" className="btn btn-success">Add New User</Link>
          <h1>List of Users</h1>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>IMEI</th>
              <th>Phone Number</th>
              <th>Complaint</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((device, key) =>
              <tr key={key}>
                <td>{device.id}</td>
                <td>{device.username}</td>
                <td>{device.imei}</td>
                <td>{device.phonenumber}</td>
                <td>{device.complaint}</td>
                <td>
                  <button onClick={() => deleteUser(device.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
