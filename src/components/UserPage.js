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
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '300px' }}
                center={location}
                zoom={10}
              >
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
          </section>

          <section id="imeiChecker">
            <h2>IMEI Checker</h2>
            <p>Your IMEI (International Mobile Equipment Identity) is a unique identifier for your mobile device. You can check your IMEI by dialing *#06# on your phone. This number can help you track or block your phone if it gets lost or stolen.</p>
            <img src="/images/imei-dial.jpg" alt="Dial *#06# to check IMEI" />
            <a href="https://imei.info/" target="_blank" rel="noopener noreferrer">
              <button className="btn">Check IMEI on imei.info</button>
            </a>
          </section>
          
          <section id="securityTips">
            <h2>Security Tips</h2>
            <img src="/images/security-tips.jpg" alt="Security Tips" />
            <ul>
              <li>Keep your device's software up to date.</li>
              <li>Use strong passwords and enable two-factor authentication.</li>
              <li>Install reputable antivirus software.</li>
              <li>Be cautious of phishing scams and suspicious links.</li>
              <li>Regularly back up your data.</li>
              <li>Use a VPN when connected to public Wi-Fi.</li>
            </ul>
          </section>
          
          <section id="forHelp">
            <h2>For Help</h2>
            <img src="/images/customer-support.jpg" alt="Customer Support" />
            <p>If you need assistance, you can reach out to the following numbers:</p>
            <ul>
              <li>MTN: 1234</li>
              <li>Airtel: 5678</li>
              <li>Police: 999</li>
              <li>Our Support: 0800-123-456</li>
              <li>Email: support@uccdeviceassistant.com</li>
            </ul>
          </section>
          
          <section id="crimeHotspots">
            <h2>Crime Hotspots</h2>
            <img src="/images/crime-hotspots.jpg" alt="Crime Hotspots" />
            <p>In Uganda, certain areas are known for high rates of device theft and data loss. Exercise caution when visiting these locations:</p>
            <ul>
              <li>Kampala Central</li>
              <li>Nakawa</li>
              <li>Kyebando</li>
              <li>Kisenyi</li>
              <li>Katwe</li>
            </ul>
          </section>
          
          <section id="techShops">
            <h2>Tech Shops</h2>
            <img src="/images/tech-shops.jpg" alt="Tech Shops" />
            <p>Here are some trusted and legitimate tech shops in Uganda where you can buy quality phones and devices:</p>
            <ul>
              <li>Banana Phone World</li>
              <li>Phones 4 U</li>
              <li>Tech Hub</li>
              <li>Mobile City</li>
              <li>Phone House</li>
            </ul>
          </section>
          
          <section id="statistics">
            <h2>Statistics</h2>
            <img src="/images/statistics.jpg" alt="Statistics" />
            <p>Here are some statistics on the best device specs, quality, processing power, camera quality, storage, sales, price, and availability:</p>
            <ul>
              <li>Best Processor: Snapdragon 888</li>
              <li>Top Camera Quality: iPhone 12 Pro</li>
              <li>Highest Storage: Samsung Galaxy S21 Ultra</li>
              <li>Most Affordable: Xiaomi Redmi Note 10</li>
              <li>Best Selling: Apple iPhone 12</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
