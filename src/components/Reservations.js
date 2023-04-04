import React from 'react';
import Corousel from './Corousel';
import BookingForm from './BookingForm';

const Reservations = () => {
  return (
    <section>
      <Corousel />
      <article className="container">        
        <BookingForm />
      </article>
    </section>
  );
};

export default Reservations;
