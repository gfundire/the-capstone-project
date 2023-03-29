import React from 'react';
import Button from './Button';
import dishes from '../utils/dishes';

const Specials = () => {
  return (
    <section className=" container specials bg-secondary">
      <div className="row my-3">
        <div className="col">
          <h2>This week's Specials</h2>
        </div>
        <div className="col">
          <Button className="float-end">Online Menu</Button>
        </div>
      </div>
      <div className="row card-area">
        <ul>
          {dishes.map((d) => (
            <li key={d.name}>{d.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Specials;
