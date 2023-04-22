import React from 'react';
import {Star,StarHalf} from "./Star";
import './profile.css';

const Profile = ({ src, first, last }) => {
  return (
    <article className="col-md-4 profile">
      <div className="profile text-center p-3 mb-5 rounded">
        <img src={src} alt="testimonial" />
        <h5 className="text-center">{first + ' ' + last}</h5>
        <p className="text-center"><Star/><Star/><Star/><Star/><StarHalf/></p>
        <p>
          I Love Little Lemon. Their service is the best and their recipe is
          second to none
        </p>
      </div>
    </article>
  );
};

export default Profile;
