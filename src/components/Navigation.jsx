import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = () => (
  <nav className="navbar">
    <h1 className="logo">Mucha Naibei</h1>
    <ul className="navlinks">
      <NavLink to="/">home</NavLink>
      <NavLink to="/resume">resume</NavLink>
      <NavLink to="/projects">projects</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </ul>
  </nav>
);

export default Navigation;
