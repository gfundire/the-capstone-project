import React from 'react';
import Button from './Button';
import dishes from '../utils/dishes';
import Card from './Card';
import './specials.css';

const Specials = () => {
  return (
    <section className="specials pt-5 w-100">
      <div className="container">
        <div className="row my-3">
          <div className="col-8">
            <h2 className="section-title">This week's Specials</h2>
          </div>
          <div className="col-4">
            <Button className="float-end">Online Menu</Button>
          </div>
        </div>
        <div className="card-area pb-5">
          {dishes.map((d) => (
            <Card
              key={d.name}
              title={d.name}
              text={d.description}
              src={d.src}
              price={d.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
