import React from 'react';
import Button from './Button';
import dishes from '../utils/dishes';
import Card from './Card';


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
      <div className="row card-area pb-5">     
          {dishes.map((d) => (
            <div className="col-md-4" key={d.name}>
            <Card  title={d.name} text={d.description} src={d.src} price={d.price}/>
            </div>
          ))}
      
      </div>
    </section>
  );
};

export default Specials;
