import React from 'react';

const Card = ({ title, text, src, price }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={src} alt={title} />
      <div className="card-body">
        <h5 className="card-title">
          {title}
          <span className="float-end">{price}</span>
        </h5>
        <p className="card-text">{text}</p>
        <div>
          <a href="#" className="btn btn-primary">
            Order a delivery
          </a>
          <a href="#" className="btn btn-primary float-end">
            add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
