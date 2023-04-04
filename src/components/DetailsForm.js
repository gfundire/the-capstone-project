import React from 'react';
import Button from './Button';

const DetailsForm = () => {
  return (
    <>
      <h1 className="text-center my-5">Fill in Your Details</h1>
      <form className="row g-3 mb-5 px-5">
        <div className="col-6">
          <label htmlFor="firstName" className="form-label">
            *First Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            id="firstName"
          />
        </div>
        <div className="col-6">
          <label htmlFor="lastName" className="form-label">
            *Last Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            id="lastName"
          />
        </div>
        <div className="col-6">
          <label htmlFor="phoneNumber" className="form-label">
            *Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            aria-label="Phone Number"
            id="phoneNumber"
          />
        </div>
        <div className="col-6">
          <label htmlFor="lastName" className="form-label">
            *Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            id="email"
          />
        </div>
        
        <div className="col-12 mt-4">
        <label  htmlFor="request" className="form-label">
            *Special Request (Optional)
          </label>
          <textarea
            className="form-control"
            placeholder="Add a Special Request(Optional)"
            aria-label="request"
            id="request"
            rows="5"
          ></textarea>
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

export default DetailsForm;
