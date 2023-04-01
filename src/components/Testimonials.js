import React, { useEffect, useState } from 'react';
import './testimonials.css';

const Testimonials = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch('https://randomuser.me/api/?results=3')
        .then((res) => res.json())
        .then((res) => setProfiles(res.results))
        .catch((error) => console.log(error));
    };

    fetchData();
  }, []);

  if (profiles.length > 0) {
    return (
      <section className="row my-3">
        <article className="col-md-4 bg-light">{'DAta ' + profiles.length}</article>
        <article className="col-md-4 bg-light">Article 1</article>
        <article className="col-md-4 bg-light">Article 1</article>
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
