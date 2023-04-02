import React from 'react';
import './profile.css';

const Profile = ({ src, first, last }) => {
  return (
    <article className="col-md-4 profile">
      <div className="profile text-center">
        <img src={src} alt="testimonial" />
        <h5 className="text-center">{first + ' ' + last}</h5>
        <p className="text-center">Rating</p>
        <p>
          I Love Little Lemon. Their service is the best and their recipe is
          second to none
        </p>
      </div>
    </article>
  );
};

export default Profile;
