import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/UserPage.css';

const UserPage = () => {
  const [inputs, setInputs] = useState({ username: '', imei: '', phonenumber: '', complaint: '' });
  const [location, setLocation] = useState({ lat: -34.397, lng: 150.644 });
  const [mapInputs, setMapInputs] = useState({ lat: -34.397, lng: 150.644 });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  //   const { name, value } = event.target;
  //   setInputs(values => ({ ...values, [name]: value }));
   };

  const handleMapChange = (event) => {
    const { name, value } = event.target;
    setMapInputs(values => ({ ...values, [name]: parseFloat(value) }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:5000/devicedata', inputs)
      .then(response => {
        console.log(response.data);
        alert('Data submitted successfully');
      })
      .catch(error => {
        console.error('There was an error submitting the data!', error);
        alert('Failed to submit data');
      });
  };

  const handleMapSubmit = (event) => {
    event.preventDefault();
    setLocation(mapInputs);
  };

  return (
    <div className="userpage-container">
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
              <Link to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/UserPage">
                <i className="fas fa-tachometer-alt"></i> Dashboard
              </Link>
            </li>
            <li>
              <a href="#findMyDevice">
                <i className="fas fa-search-location"></i> Find My Device
              </a>
            </li>
            <li>
              <a href="#imeiChecker">
                <i className="fas fa-mobile-alt"></i> IMEI Checker
              </a>
            </li>
            <li>
              <a href="#securityTips">
                <i className="fas fa-shield-alt"></i> Security Tips
              </a>
            </li>
            <li>
              <a href="#forHelp">
                <i className="fas fa-question-circle"></i> For Help
              </a>
            </li>
            <li>
              <a href="#crimeHotspots">
                <i className="fas fa-map-marked-alt"></i> Crime Hotspots
              </a>
            </li>
            <li>
              <a href="#techShops">
                <i className="fas fa-store"></i> Tech Shops
              </a>
            </li>
            <li>
              <a href="#statistics">
                <i className="fas fa-chart-bar"></i> Statistics
              </a>
            </li>
          </ul>
        </aside>
        <div className="content">
          <section id="findMyDevice">
            <h2>Find My Device</h2>
            <p>Both Apple and Android offer services to help you locate your device if it is lost or stolen. Use the buttons below to access the respective services.</p>
            <div className="find-my-device">
              <div className="illustration">
                <img src="/images/applefind.jpeg" alt="Apple Find My" />
                <a href="https://www.icloud.com/find" target="_blank" rel="noopener noreferrer">
                  <button className="btn">Apple Find My</button>
                </a>
              </div>
              <div className="illustration">
                <img src="/images/androidfind.jpeg" alt="Android Find My Device" />
                <a href="https://www.google.com/android/find" target="_blank" rel="noopener noreferrer">
                  <button className="btn">Android Find My Device</button>
                </a>
              </div>
            </div>
          </section>
          <section id="imeiChecker">
            <h2>IMEI Checker</h2>
            <p>Content for IMEI Checker...</p>
          </section>
          <section id="securityTips">
            <h2>Security Tips</h2>
            <p>Content for Security Tips...</p>
          </section>
          <section id="forHelp">
            <h2>For Help</h2>
            <p>Content for For Help...</p>
          </section>
          <section id="crimeHotspots">
            <h2>Crime Hotspots</h2>
            <p>Content for Crime Hotspots...</p>
          </section>
          <section id="techShops">
            <h2>Tech Shops</h2>
            <p>Content for Tech Shops...</p>
          </section>
          <section id="statistics">
            <h2>Statistics</h2>
            <p>Content for Statistics...</p>
          </section>
          <section id="deviceInformation">
            <h2>Submit Device Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" value={inputs.username} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>IMEI</label>
                <input type="text" name="imei" value={inputs.imei} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" name="phonenumber" value={inputs.phonenumber} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Complaint</label>
                <textarea name="complaint" value={inputs.complaint} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
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
            <LoadScript googleMapsApiKey="AIzaSyClM0zyPgVVz-qNbDHrJd8klBGdhR0Fcvs">
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={location}
                zoom={10}
              >
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
