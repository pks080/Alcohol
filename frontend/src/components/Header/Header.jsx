import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-overlay"></div>

      <div className="header-contents">
        <h2>🎊 Welcome to BoozeBin!</h2>
        <p>
          🎉 Your Ultimate Party Delivery! 🎉 <br/>
          Get your favorite drinks 🍻, drinking snacks 🥨, glasses 🥂, hangover remedies 🍋💊, and even speakers 🔊 delivered right to your doorstep.
        </p>
        <a href="#explore-menu">
          <button className='buttonwl'>🍷 Browse the Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
