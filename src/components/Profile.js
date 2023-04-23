import React from 'react';
import { Star, StarHalf } from './Star';
import './profile.css';

const Profile = ({ src, first, last }) => {
  return (
    <article className="col-md-4">
      <div className="profile text-center p-3 mb-5">
        <img src={src} alt="testimonial" />
        <h5 className="text-center card-title mt-1">{first + ' ' + last}</h5>
        <div className="text-center mt-1">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>
        <p className="mt-1">
          I Love Little Lemon. Their service is the best and their recipe is
          second to none
        </p>
      </div>
    </article>
  );
};

export default Profile;
