import React from 'react';
import Button from "./Button";;
import './call-to-action.css';

const CallToAction = () => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-sm-6 hero-text mb-3">
          <h1 className="color-primary">Little Lemon</h1>
          <h2 className="color-primary">Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div>
            <Button className="float-end">Reserve a Table</Button>
          </div>
        </div>
        <div className="col-sm-6  mb-3">
          <img
            className="round"
            src="https://images2.imgbox.com/81/3e/scEJEW4D_o.png"
            alt="little lemon"
          />
        </div>
     </div>
    </section>
  );
};

export default CallToAction;
