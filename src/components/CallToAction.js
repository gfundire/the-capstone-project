import React from 'react';
import Section from './Section';

const CallToAction = () => {
  return (
    <Section>
      <div className="col-6">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <div>
          <button className="btn btn-primary">Reserve a Table</button>
        </div>
      </div>
      <div className="col-6">
        <img
          className="img-fluid rounded"
          src="https://images2.imgbox.com/4a/bb/t38SrfFl_o.jpg"
          alt="little lemon"
        />
      </div>
    </Section>
  );
};

export default CallToAction;
