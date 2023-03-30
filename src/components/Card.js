import React from 'react';

const Card = ({ title, text }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src="" alt={title} />
      <div className="card-body">
        <div>
          <h5 className="card-title">{title}</h5>
        </div>
        <p className="card-text">{text}</p>
        <div>
          <a href="#" className="btn btn-primary">
            Order a delivery
          </a>
          <a href="#" className="btn btn-primary">
            add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
