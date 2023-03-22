import React from 'react';

const Nav = ()=>( 
  <nav className="navbar navbar-expand-md nav-pills fixed-top bg-light">
      <div className="container">
      <a className="navbar-brand" href="#">
        <img className="d-inline-block" width="140" height="40" src="https://images2.imgbox.com/fe/61/RrOIGU8Y_o.png" alt="logo"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarCollapse"
      aria-controls="navbarCollapse" aria-expanded="false"
      aria-label="Toggle Navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
        <ul className="collapse navbar-collapse nav navbar-nav" id="navbarCollapse">    

          <li className="nav-item nav-fill">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Reservations
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-nowrap" href="#">
              Order Online
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>  
    
);

export default Nav;