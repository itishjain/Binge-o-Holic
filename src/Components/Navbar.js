import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Navbar = () => {
  return (
    <div>
      <ul className="navlinks">
        {LINKS.map(items => (
          <li key={items.to} className="linkItem">
            <Link to={items.to}>{items.text}</Link>
          </li>
        ))}
        {/* <li>                                            // This is converted into an object as above to avoid repition
          <Link to="/starred">Go to Starred Page</Link>
        </li>
        <li>
          <Link to="/">Go to Home Page</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
