import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserPage.css';

const UserPage = () => {
  return (
    <div className="userpage-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/images/logo.png" alt="Logo" />
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
          {/* Add content sections here */}
          <section id="findMyDevice">
            <h2>Find My Device</h2>
            <p>Content for Find My Device...</p>
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
        </div>
      </div>
    </div>
  );
};

export default UserPage;













// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/UserPage.css';

// const UserPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     imei: '',
//     phonenumber: '',
//     complaint: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/devicedata', formData);
//       alert(response.data.message);
//     } catch (error) {
//       console.error('There was an error submitting the form!', error);
//     }
//   };

//   return (
//     <div className="user-page-container">
//       <h2>Submit Device Data</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="imei"
//           placeholder="IMEI"
//           value={formData.imei}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="phonenumber"
//           placeholder="Phone Number"
//           value={formData.phonenumber}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="complaint"
//           placeholder="Complaint"
//           value={formData.complaint}
//           onChange={handleChange}
//           required
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UserPage;
