import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navigation.css';

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
          <ul className="mobile-navlinks">
            <div
              role="button"
              onClick={closeMenu}
              tabIndex={0}
              onKeyDown={closeMenu}
            >
              <NavLink to="/" className={(activeLink) => (activeLink.isActive ? 'active-link' : '')}>
                Home
              </NavLink>
            </div>
            <div
              role="button"
              onClick={closeMenu}
              tabIndex={0}
              onKeyDown={closeMenu}
            >
              <NavLink to="/resume" className={(activeLink) => (activeLink.isActive ? 'active-link' : '')}>
                Resume
              </NavLink>
            </div>
            <div
              role="button"
              onClick={closeMenu}
              tabIndex={0}
              onKeyDown={closeMenu}
            >
              <NavLink to="/projects" className={(activeLink) => (activeLink.isActive ? 'active-link' : '')}>
                Projects
              </NavLink>
            </div>
            <div
              role="button"
              onClick={closeMenu}
              tabIndex={0}
              onKeyDown={closeMenu}
            >
              <NavLink to="/contact" className={(activeLink) => (activeLink.isActive ? 'active-link' : '')}>
                Contact
              </NavLink>
            </div>
          </ul>
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
