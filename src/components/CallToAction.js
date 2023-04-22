import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './call-to-action.css';

const CallToAction = () => {
  const navigate = useNavigate();
  const handleClik = () => navigate('reservations/bookings');
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-6 hero-text mb-3">
          <div className="wrap">
          <h1 className="color-primary">Little Lemon</h1>
          <h2 className="text-white">Chicago</h2>
          <p className="text-white lead-text py-5">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          </div>
          <div>
            <button
              className="btn btn-primary"
              aria-label="On Click"
              onClick={handleClik}
            >
              Reserve a Table
            </button>
          </div>
        </div>
        {/* <div className=""> */}
        <img
          className="col-md-6 mb-3 hero"
          src="https://images2.imgbox.com/81/3e/scEJEW4D_o.png"
          alt="little lemon"
        />
        {/* </div> */}
      </div>
    </section>
  );
};

export default CallToAction;
