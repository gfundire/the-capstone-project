import React,{useState} from 'react';
import Corousel from './Corousel';
import BookingForm from './BookingForm';
import DetailsForm from './DetailsForm';


const Reservations = () => {
  const [availableTimes, setAvailableTimes] = useState('');
  const handleChange = (e) => {
    setAvailableTimes(e.target.value);
    console.log(e.target.value);
  };

  return (
    <section>
      <Corousel />
      <article className="container">
        <BookingForm times={availableTimes} setTimes={setAvailableTimes} onTimesChange={handleChange}  />
        <DetailsForm />
      </article>
    </section>
  );
};

export default Reservations;
