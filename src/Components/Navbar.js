import React from 'react';
import { useLocation } from 'react-router';
// import { Link } from 'react-router-dom';
import { LinkStyled } from './navbar.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/watch-list', text: 'Watch-List' },
];

const Navbar = () => {
  const Location = useLocation();

  return (
    <div className="navigation">
      <ul className="navlinks">
        {LINKS.map(items => (
          <li key={items.to} className="linkItem">
            <LinkStyled
              to={items.to}
              className={items.to === Location.pathname ? 'hover' : ''}
            >
              {items.text}
            </LinkStyled>
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
