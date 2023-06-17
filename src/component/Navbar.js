import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import IconButton from './IconButton';
import '../index.css';

const Navbar = ({ title, routes }) => (
  <nav className="nav-bar">
    <Link className="nav-brand" to="/">{title}</Link>
    <ul className="nav-links">
      {routes.map(({ name, path }) => (
        <li key={path}>
          <NavLink
            className={`nav-link ${name === 'Books' ? 'books-link' : ''}`}
            activeClassName="active-link"
            exact
            to={path}
          >
            {name}
          </NavLink>
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

export default Navbar;
