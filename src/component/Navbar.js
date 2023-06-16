import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = ({ title, routes }) => (
  <nav className="nav-bar">
    <Link className="nav-brand" to="/">{title}</Link>
    <ul className="nav-links">
      {routes.map(({ name, path }) => (
        <li key={path}>
          <NavLink className="nav-link" activeClassName="active-link" exact to={path}>{name}</NavLink>
        </li>
      ))}
    </ul>
    <IconButton name="person" />
  </nav>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const IconButton = ({ name }) => (
  <button className="icon-button" type="button">
    <span className="material-icons primary-color">{name}</span>
  </button>
);

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navbar;
