import React from 'react';
import Corousel from './Corousel';
import './confirmation.css';

const ConfirmedBooking = () => {
  return (
    <section>
      <Corousel />
      <article className="container success pt-5">
        <h1 className="my-5 text-center">
          Success!{' '}
          <span>
            <i className="bi bi-check-circle"></i>
          </span>
        </h1>
        <p className="my-0">
          Your Table Reservation was successful, your invoice was sent via your
          email address.
        </p>
        <p >Thank you for choosing us.</p>
      </article>
    </section>
  );
};

export default ConfirmedBooking;
