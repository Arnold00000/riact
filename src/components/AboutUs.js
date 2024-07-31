import React from "react";
import { Link } from "react-router-dom";
import '../styles/AboutUs.css'; // Add your CSS styling for this page

const AboutUs = () => {
  return (
    <div style={backgroundStyle}>
      <div style={backgroundOverlayStyle}></div>
      <nav className="transparent-navbar">
        <Link to="/" className="nav-logo">
          <img src="/images/logo1.jpeg" alt="Logo" className="nav-logo-img" />
          <span className="nav-logo-text">Home</span>
        </Link>
        {/* <div className="nav-links">
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div> */}
      </nav>
      <div className="about-us-container" style={contentContainerStyle}>
        <section className="about-us-section">
          <h2>About Us</h2>
          <p>Welcome to the Uganda Communications Commission (UCC). We are dedicated to ensuring effective communication and regulatory compliance in Uganda. Our mission is to foster an inclusive and innovative communication environment.</p>
        </section>
        <section className="team-section">
          <h2>Our Team</h2>
          <p>Meet our dedicated team of professionals who work tirelessly to support and advance the communications sector in Uganda. Our team includes experts in engineering, policy development, and regulatory compliance.</p>
        </section>
        <section className="services-section">
          <h2>Our Services</h2>
          <p>We offer a range of services including regulatory oversight, policy development, and support for communication infrastructure. Our services are designed to promote a secure and efficient communication environment in Uganda.</p>
        </section>
        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>If you have any questions or need assistance, feel free to reach out to us. You can contact us via email, phone, or visit our office.</p>
          <ul>
            <li>Email: contact@ucc.co.ug</li>
            <li>Phone: +256 123 456 789</li>
            <li>Address: Uganda Communications Commission, P.O. Box 7376, Kampala, Uganda</li>
          </ul>
        </section>
      </div>
    </div>
  );
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

const contentContainerStyle = {
  zIndex: 2,
  position: 'relative',
  backgroundColor: '#fff', // Background color for the content
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '800px',
  width: '100%',
};

export default AboutUs;
