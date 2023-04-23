import React from 'react';
import Corousel from './Corousel';
import './confirmation.css';

const ConfirmedBooking = () => {
  return (
    <>
      <Corousel />
      <section className="container success pt-5">
        <div className="mt-5 text-center">
          <i className="bi bi-check-circle"></i>
        </div>
        <h1 className="my-3 text-center">Success!</h1>
        <p>
          Your Table Reservation was successful, your invoice was sent via your
          email address.
        </p>
        <p>Thank you for choosing us.</p>
      </section>
    </>
  );
};

export default ConfirmedBooking;
