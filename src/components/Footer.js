import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import links from '../utils/siteLinks';

const Footer = () => {
  const contacts = ['Address', 'Phone', 'Email'];

  const socials = [
    { name: 'facebook', url: 'https://facebook.com', icon: '' },
    { name: 'twitter', url: 'https://twitter.com', icon: '' },
    { name: 'linkedin', url: 'https://linkedin.com', icon: '' },
    { name: 'google', url: 'https://google.com', icon: '' },
  ];

  return (
    <footer className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Link to="/">
              <img
                src="https://images2.imgbox.com/0e/c6/AvYTF4tK_o.png"
                alt="Little Lemon Logo"
                width="100"
              />
            </Link>
          </div>
          <div className="col-sm-3">
            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-3">            
            <ul>
              {contacts.map((link) => (
                <li key={link}>
                  <Link to="/">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-3">            
            <ul>
              {socials.map((social) => (
                <li key={social.name}>
                  <Link to={social.url} target="_blank">
                    <span>{<i className="bi bi-linkedin"></i>}</span>
                    <span>{social.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
