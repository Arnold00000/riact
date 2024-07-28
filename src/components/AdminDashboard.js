import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../styles/AdminDashboard.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function AdminDashboard() {

  const [devices, setUsers] = useState([]);
  const [location, setLocation] = useState({ lat: -34.397, lng: 150.644 });
  const [mapInputs, setMapInputs] = useState({ lat: -34.397, lng: 150.644 });
  const [imei, setImei] = useState('');
  const [deviceDetails, setDeviceDetails] = useState('');
  const [mcc, setMcc] = useState('');
  const [mnc, setMnc] = useState('');
  const [lac, setLac] = useState('');
  const [cid, setCid] = useState('');
  const [geolocation, setGeolocation] = useState('');

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

  const handleMapChange = (event) => {
    const { name, value } = event.target;
    setMapInputs(values => ({ ...values, [name]: parseFloat(value) }));
  };

  const handleMapSubmit = (event) => {
    event.preventDefault();
    setLocation(mapInputs);
  };

  const handleImeiChange = (event) => {
    setImei(event.target.value);
  };

  const handleImeiSubmit = async (event) => {
    event.preventDefault();
    const imeiValidation = validateImei(imei);
    if (!imeiValidation.isValid) {
      alert("Invalid IMEI. Please check and try again.");
      return;
    }
    if (imeiValidation.isMissingCheckDigit) {
      alert(`The correct IMEI with check digit is: ${imeiValidation.correctedImei}`);
      setImei(imeiValidation.correctedImei);
      return;
    }
    alert("IMEI is valid.");
    try {
      const response = await axios.get(`https://alpha.imeicheck.com/api/modelBrandName?imei=${imei}&format=html`);
      setDeviceDetails(response.data);
    } catch (error) {
      setDeviceDetails(`Error fetching data: ${error}`);
    }
  };

  const handleGeolocationChange = (event) => {
    const { name, value } = event.target;
    if (name === 'mcc') setMcc(value);
    if (name === 'mnc') setMnc(value);
    if (name === 'lac') setLac(value);
    if (name === 'cid') setCid(value);
  };

  const handleGeolocationSubmit = async (event) => {
    event.preventDefault();
    const apiKey = 'pk.e95df2e8285614082384739307be9d5c';
    const url = `https://us1.unwiredlabs.com/v2/process.php`;
    const payload = {
      token: apiKey,
      radio: 'gsm',
      mcc,
      mnc,
      cells: [{ lac, cid }],
      address: 1
    };
    try {
      const response = await axios.post(url, payload);
      setGeolocation(response.data);
      setLocation({ lat: response.data.lat, lng: response.data.lon });
    } catch (error) {
      setGeolocation(`Error fetching data: ${error}`);
    }
  };

  const validateImei = (imei) => {
    const imeiStr = imei.toString();
    if (imeiStr.length < 14 || imeiStr.length > 15) return { isValid: false };

    let sum = 0;
    for (let i = 0; i < 14; i++) {
      let digit = parseInt(imeiStr.charAt(i), 10);
      if (i % 2 === 1) digit *= 2;
      sum += digit > 9 ? digit - 9 : digit;
    }

    const checkDigit = (10 - (sum % 10)) % 10;

    if (imeiStr.length === 15) {
      return { isValid: checkDigit === parseInt(imeiStr.charAt(14), 10) };
    } else {
      return { isValid: true, isMissingCheckDigit: true, correctedImei: imeiStr + checkDigit };
    }
  };

  return (
    <div className="admin-dashboard">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/images/logo1.jpeg" alt="Logo" />
          <span>UCC Device Assistant</span>
        </div>
      </nav>
      <div className="main-content">
        <aside className="sidebar">
          <ul>
            <li>
              <a href="#userList">
                <i className="fas fa-users"></i> List of Users
              </a>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <a href="#adminDashboard">
                <i className="fas fa-tachometer-alt"></i> Dashboard
              </a>
            </li>
            <li>
              <a href="#map">
                <i className="fas fa-map"></i> Map
              </a>
            </li>
            <li>
              <a href="#findMyDevice">
                <i className="fas fa-search-location"></i> Find My Device
              </a>
            </li>
            <li>
              <a href="#mlModels">
                <i className="fas fa-chart-bar"></i> ML Models
              </a>
            </li>
            <li>
              <a href="#imeiChecker">
                <i className="fas fa-mobile-alt"></i> IMEI Checker
              </a>
            </li>
            <li>
              <a href="#geolocation">
                <i className="fas fa-map-marker-alt"></i> Geolocation
              </a>
            </li>
          </ul>
        </aside>
        <div className="content">
          <section id="userList">
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
                {devices.map((device, key) =>
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
          </section>

          <section id="map">
            <h2>Map</h2>
            <form onSubmit={handleMapSubmit}>
              <div className="form-group">
                <label>Latitude</label>
                <input type="number" step="0.0001" name="lat" value={mapInputs.lat} onChange={handleMapChange} required />
              </div>
              <div className="form-group">
                <label>Longitude</label>
                <input type="number" step="0.0001" name="lng" value={mapInputs.lng} onChange={handleMapChange} required />
              </div>
              <button type="submit" className="btn">Update Map</button>
            </form>
            <LoadScript googleMapsApiKey="AIzaSyBOO6a2QKkzcvZzfszTgQxpui-8xODl0GU">
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '300px' }}
                center={location}
                zoom={10}
              >
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
          </section>

          <section id="findMyDevice">
            <h2>Find My Device</h2>
            <div className="find-my-device">
              <div className="illustration">
                <img src="/images/applefind.jpeg" alt="Apple Find My" />
                <a href="https://www.icloud.com/find" target="_blank" rel="noopener noreferrer">
                  <button className="btn">Apple Find My</button>
                </a>
              </div>
              <div className="illustration">
                <img src="/images/googlefind.jpeg" alt="Google Find My Device" />
                <a href="https://www.google.com/android/find" target="_blank" rel="noopener noreferrer">
                  <button className="btn">Google Find My Device</button>
                </a>
              </div>
            </div>
          </section>

          <section id="mlModels">
            <h2>ML Models</h2>
            <div className="ml-content">
              {/* Placeholder for ML models and visualizations */}
              <p>ML models and data visualizations will be integrated here.</p>
            </div>
          </section>

          <section id="imeiChecker">
            <h2>IMEI Checker</h2>
            <form onSubmit={handleImeiSubmit}>
              <div className="form-group">
                <label>Enter IMEI</label>
                <input type="text" name="imei" value={imei} onChange={handleImeiChange} required />
              </div>
              <button type="submit" className="btn">Check IMEI</button>
            </form>
            <div className="imei-details">
              <h3>Device Details</h3>
              <p>{deviceDetails}</p>
            </div>
          </section>

          <section id="geolocation">
            <h2>Geolocation</h2>
            <form onSubmit={handleGeolocationSubmit}>
              <div className="form-group">
                <label>MCC</label>
                <input type="text" name="mcc" value={mcc} onChange={handleGeolocationChange} required />
              </div>
              <div className="form-group">
                <label>MNC</label>
                <input type="text" name="mnc" value={mnc} onChange={handleGeolocationChange} required />
              </div>
              <div className="form-group">
                <label>LAC</label>
                <input type="text" name="lac" value={lac} onChange={handleGeolocationChange} required />
              </div>
              <div className="form-group">
                <label>CID</label>
                <input type="text" name="cid" value={cid} onChange={handleGeolocationChange} required />
              </div>
              <button type="submit" className="btn">Get Geolocation</button>
            </form>
            <div className="geolocation-details">
              <h3>Geolocation Details</h3>
              <p>{JSON.stringify(geolocation, null, 2)}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

