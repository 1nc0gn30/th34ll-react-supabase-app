import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css'; // Assuming you have a separate CSS file for the footer
import { Typography } from '@mui/material';

const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update the time every second

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="footer-contact-section">
          <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:business@th34ll.com">Contact Us</a>
        </div>
        <p>Copyright &copy; {currentDateTime.getFullYear()} TH3 4LL, All Rights Reserved.</p>
        <p>{currentDateTime.toLocaleString()}</p>
        
      </div>
      <Typography variant="body2" sx={{ mt: { xs: 2, md: 0 } }}>
        Website built by{' '}
        <a
          href="https://nealfrazier.tech"
          className="nft-link"
          target="_blank"
          rel="noopener noreferrer"
          style={{textDecoration: 'underline' }}
        >
          Neal Frazier Tech
        </a>
      </Typography>
    </footer>
  );
};

export default Footer;
