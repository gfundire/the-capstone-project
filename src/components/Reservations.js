import React from 'react';
import Corousel from './Corousel';
import DetailsForm from './DetailsForm';

const Reservations = () => {
  return (
    <section>
      <Corousel />
      <article className="container">        
        <DetailsForm />
      </article>
    </section>
  );
};

export default Reservations;
