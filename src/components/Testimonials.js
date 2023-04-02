import React from 'react';
import useProfiles from '../hooks/useProfiles.js';
import './testimonials.css';

const Testimonials = () => {
  const { profiles } = useProfiles();
  
  if (profiles.length > 0) {
    return (
      <section className="row my-3">
        <article className="col-md-4 bg-light">
          <img src={profiles[0].picture.large} />
        </article>
        <article className="col-md-4 bg-light">
          <img src={profiles[1].picture.large} />
        </article>
        <article className="col-md-4 bg-light">
          <img src={profiles[2].picture.large} />
        </article>
      </section>
    );
  }
  return (
    <div className="alert alert-info" role="alert">
      No testimonials at the moment
    </div>
  );
};

export default Testimonials;
