import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <hr />
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='logo-footer' src={assets.logo} alt="BoozeBuzz Logo" />
          <p className="footer-description">
            🍾 <strong>BoozeBuzz:</strong> Your late-night alcohol delivery genie!  
            🥂 Order liquor, mixers, and party goodies anytime, anywhere — we deliver joy to your doorstep! 🚚✨  
            🎉 Sip back, relax, and let the party come to you!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>🍻 COMPANY</h2>
          <ul>
            <li>🏠 Home</li>
            <li>ℹ️ About Us</li>
            <li>🚚 Delivery</li>
            <li>🔒 Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>📞 GET IN TOUCH</h2>
          <ul>
            <li>📱 +1-212-456-7890</li>
            <li>📧 cheers@boozebuzz.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className='footer-copyright'>
        © 2024 BoozeBuzz 🍸 — All rights reserved. Drink responsibly. 🚫🥴
      </p>
    </div>
  );
};

export default Footer;
