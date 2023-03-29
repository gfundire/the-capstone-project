import React from 'react';
import Section from './Section';
import './call-to-action.css';

const CallToAction = () => {
  return (
    <Section>
      <div className="col-sm-6">
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
      
      <img
        className="img col-sm-6 rounded"
        src="https://images2.imgbox.com/81/3e/scEJEW4D_o.png"
        alt="little lemon"
      />
      
    </Section>
  );
};

export default CallToAction;
