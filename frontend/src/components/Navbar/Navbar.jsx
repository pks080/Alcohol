import React, { useEffect, useState, useContext, useRef } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { getTotalCartAmount, token, setToken, logoutUser } = useContext(StoreContext);
  const navigate = useNavigate();

  // 🧼 Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    logoutUser();
    setShowDropdown(false);
    navigate("/");
  };

  // 🕵️ Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🪄 Scroll listener to highlight the current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = [
        { id: 'home', range: [0, 400] },
        { id: 'explore-menu', range: [400, 1000] },
        { id: 'app-download', range: [1000, 1600] },
        { id: 'footer', range: [1600, Infinity] }
      ];
      for (const section of sections) {
        if (scrollY >= section.range[0] && scrollY < section.range[1]) {
          setMenu(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar">
      {/* 🍾 Logo + Name */}
      <Link to="/" className="logo-link">
        <img src={assets.logo} alt="Logo" className="logo" />
        <span className="logo-text">🍷 BoozeBin 🥂</span>
      </Link>

      {/* 📍 Navigation Links */}
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("explore-menu")} className={menu === "explore-menu" ? "active" : ""}>Drinks Menu 🍹</a>
        <a href="#app-download" onClick={() => setMenu("app-download")} className={menu === "app-download" ? "active" : ""}>Get the App 📲</a>
        <a href="#footer" onClick={() => setMenu("footer")} className={menu === "footer" ? "active" : ""}>Contact Us 🍻</a>
      </ul>

      {/* ➕ Cart + Auth */}
      <div className="navbar-right">
        {/* 🛒 Cart */}
        <div className="navbar-search-icon">
          <Link to="/cart"><img className="basketlogo" src={assets.basket_icon} alt="Cart" /></Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>

        {/* 👤 Auth/Profile */}
        {!token ? (
          <button className="signbutton" onClick={() => setShowLogin(true)}>🍺 Sign In</button>
        ) : (
          <div className="navbar-profile" ref={dropdownRef}>
            <img
              src={assets.profile_icon}
              className="white-filter"
              alt="Profile"
              onClick={() => setShowDropdown(prev => !prev)}
            />
            {showDropdown && (
              <ul className="nav-profile-dropdown">
                <li onClick={() => { setShowDropdown(false); navigate('/myorders'); }}>
                  <img src={assets.bag_icon} alt="Orders" /><p>My Booze Orders 🍾</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="Logout" /><p>Logout 🔓</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
