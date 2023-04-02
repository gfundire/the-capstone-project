import React from 'react';

const Profile = ({ src, name }) => {
  return (
    <article className="p-3 m-2 col col-md-3">
      <div className="row">
        <div className="col-12 row">
          <div className="col-6 bg-light">
            <img src={src} alt="testimonial" className="rounded-pill" />
          </div>
          <div className="col-6 bg-light">
            <h5>{name}</h5>
            <p>Rating</p>
          </div>
        </div>
        <div className="col-12">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </article>
  );
};

export default Profile;
