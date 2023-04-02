import React from 'react';

const DetailsForm = () => {
  return (
    <>
      <h1 className="text-center my-5">Fill in Your Details</h1>
      <form className="row g-3 mb-5 px-5">
        <div class="col-6">
          <label for="firstName" class="form-label">
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
          <label for="lastName" class="form-label">
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
          <label for="phoneNumber" class="form-label">
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
          <label for="lastName" class="form-label">
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
        <div class="col-12">
          <label for="inputState" class="form-label">
          *Ocassion
          </label>
          <select id="occassion" class="form-select">
            <option selected>Occassion</option>
            <option>Birthday</option>
            <option>Aniversary</option>
          </select>
        </div>
        <div class="col-12">
          <textarea            
            class="form-control"
            placeholder="Add a Special Request(Optional)"
            aria-label="Email"
            id="email"
            rows="5"
          ></textarea>
        </div>
      </form>
    </>
  );
};

export default DetailsForm;
