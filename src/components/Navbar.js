import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavLink to="/" className="logo">
      Bookstore CMS
      {' '}
    </NavLink>
    {' '}
    <ul>
      <li>
        <NavLink className="nav-link" to="/">
          BOOKS
          {' '}
        </NavLink>
        {' '}
      </li>
      {' '}
      <li>
        <NavLink className="nav-link" to="/categories">
          CATEGORIES
          {' '}
        </NavLink>
        {' '}
      </li>
      {' '}
    </ul>
    {' '}
  </nav>
);

export default Navbar;
