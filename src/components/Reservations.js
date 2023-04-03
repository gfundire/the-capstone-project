import React from 'react';
import Corousel from './Corousel';
import BookingForm from './BookingForm';
// import DetailsForm from './DetailsForm';

const Reservations = () => {
  return (
    <section>
      <Corousel />
      <article className="container">
        <Routes>          
          <Route path="/reservations/booking" element={<BookingForm />}></Route>
        </Routes>
        {/* <DetailsForm /> */}
      </article>
    </section>
  );
};

export default Reservations;
