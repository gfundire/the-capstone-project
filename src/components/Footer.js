import React from 'react';
import logo from 'https://images2.imgbox.com/0e/c6/AvYTF4tK_o.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-sm-4">
          <Link to="/">
            <img src={logo} alt="Little Lemon Logo" />
          </Link>
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4"></div>
      </div>
    </footer>
  );
};
export default Footer;
