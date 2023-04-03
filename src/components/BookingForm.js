import React from 'react';
import Button from './Button';

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
          <select id="occassion" className="form-select">
            <option selected>No. Of diners</option>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option>{n}</option>
            ))}
          </select>
        </div>

        <div className="col-12">
          <label for="inputState" className="form-label">
            *Ocassion
          </label>
          <select id="occassion" className="form-select">
            <option selected>Occassion</option>
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
            Continue
          </Button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
