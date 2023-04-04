import React from 'react';
import Button from './Button';
import "./booking-form.css";


const BookingForm = () => {
  return (
    <>
      <h1 className="text-center my-5">Find a Table for Any Occasion</h1>
      <form className="row g-3 mb-5 px-5">
        <div className="col-6">
          <label for="date" className="form-label">
            *Date
          </label>
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            aria-label="Date"
            id="date"
          />
        </div>
        <div className="col-6">
          <label for="lastName" className="form-label">
            *Time
          </label>
          <input type="time" className="form-control" aria-label="time" id="time" />
        </div>
        <div className="col-12">
          <label for="diners" className="form-label">
            *Number of Diners
          </label>
          <input
            type="number"
            className="form-control"            
            aria-label="Number of Diners"
            id="diners"
            min="1"
            max="10"
          />
          <select id="occassion" className="form-select">
            <option selected>No. Of diners</option>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option>{n}</option>
            ))}
          </select>
        </div>

        <div className="col-12">
          <label for="occasion" className="form-label">
            *Ocassion
          </label>
          <select id="occasion" className="form-select">            
            <option>Birthday</option>
            <option>Aniversary</option>
          </select>
        </div>
        <div className="col-12">
          <h5>Seating Options</h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="standard"
              id="standard"
            />
            <label className="form-check-label" for="standard">
              Standard
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="outside"
              id="outside"
              
            />
            <label className="form-check-label" for="outside">
              Outside
            </label>
          </div>
        </div>
        <div className="co1-12">
          <Button type="submit" className="btn-lg btn-block col-12">
            Make Your Reservation
          </Button>
        </div>
      {/* </form>
      <form > */}
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date"/>
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests"/>
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation"/>
</form>
    </>
  );
};

export default BookingForm;
