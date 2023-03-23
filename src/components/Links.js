import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Order Online', path: '/order-online' },
    { name: 'Login', path: '/login' },
  ];
  return (
    <>
      {links.map((link) => {
        return (
          <li className="nav-item" key={link.name}>
            <Link to={link.path} className="nav-link">
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};
export default Links;
