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
        <div className="col-sm-6 hero-text mb-3">
          <h1 className="color-primary">Little Lemon</h1>
          <h2 className="color-primary">Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div>
            <button className="btn btn-primary" onClick={handleClik}>Reserve a Table</button>
          </div>
        </div>
        <div className="col-sm-6  mb-3">
          <img
            className="round"
            src="https://images2.imgbox.com/81/3e/scEJEW4D_o.png"
            alt="little lemon"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
