import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navigation.css';
import styles from '../styles/All.module.css';

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Mucha Naibei</h1>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <button
          type="button"
          className="hamburger-icon"
          onClick={handleMenuToggle}
          onKeyDown={handleMenuToggle}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {isMobileMenuOpen && (
          <div className={styles.overlay}>
            <nav className={styles.hamburgerNav}>
              <button className={styles.navBtn} onClick={closeMenu} type="button">
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5l-4.596-4.596L2.404.782l4.595 4.596L11.596.782Z"
                    fill="#69707D"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <ul className={styles.navList}>
                <li>
                  <NavLink to="/" className="active-link" onClick={closeMenu}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/resume" className="active-link" onClick={closeMenu}>
                    Resume
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className="active-link" onClick={closeMenu}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="active-link" onClick={closeMenu}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <ul className="navlinks">
        <li>
          <NavLink to="/" className={(activeLink) => (activeLink.isActive ? 'active-link' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={(activeLink) => (activeLink.isActive ? 'active-link' : '')}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={(activeLink) => (activeLink.isActive ? 'active-link' : '')}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={(activeLink) => (activeLink.isActive ? 'active-link' : '')}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
