import React from 'react';
import useProfiles from '../hooks/useProfiles';
import Profile from "./Profile";
import './testimonials.css';

const Testimonials = () => {
  const { profiles } = useProfiles();  

  if (profiles.length > 0) {
    return (
      <section className="row my-3">
        {
          profiles.map((p)=><Profile key={p.email} name={p.name.first} src={p.picture.medium}/>)
        }
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
