import React from 'react';
import Button from './Button';

const DetailsForm = () => {
  return (
    <>
      <h1 className="text-center my-5">Fill in Your Details</h1>
      <form className="row g-3 mb-5 px-5">
        <div class="col-6">
          <label htmlFor="firstName" class="form-label">
            *First Name
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
            id="firstName"
          />
        </div>
        <div class="col-6">
          <label htmlFor="lastName" class="form-label">
            *Last Name
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
            id="lastName"
          />
        </div>
        <div class="col-6">
          <label htmlFor="phoneNumber" class="form-label">
            *Phone Number
          </label>
          <input
            type="tel"
            class="form-control"
            placeholder="Phone Number"
            aria-label="Phone Number"
            id="phoneNumber"
          />
        </div>
        <div class="col-6">
          <label htmlFor="lastName" class="form-label">
            *Email
          </label>
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            aria-label="Email"
            id="email"
          />
        </div>
        
        <div class="col-12 mt-4">
        <label  htmlFor="request" class="form-label">
            *Special Request (Optional)
          </label>
          <textarea
            class="form-control"
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
