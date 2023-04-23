import React from 'react';
import useProfiles from '../hooks/useProfiles';
import Profile from './Profile';
import './testimonials.css';

const Testimonials = () => {
  const { profiles } = useProfiles();

  if (profiles.length > 0) {
    return (
      <section className=" px-5 testimonials w-100">
        <h3 className="text-center section-title">Testimonials</h3>
        <div className="row pt-5">
          {profiles.map((p) => (
            <Profile
              key={p.email}
              first={p.name.first}
              last={p.name.last}
              src={p.picture.medium}
            />
          ))}
        </div>
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
