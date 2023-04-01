import React, { useEffect, useState } from 'react';
import './testimonials.css';

const Testimonials = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://randomuser.me/api/?results=3');
      const response = await res.json();
      return response.results;
    };
    const profiles = fetchData();
    setData(profiles);
    console.log(data);
  }, []);
  return data.length > 0 ? (
    <section className="row my-3">
      <article className="col-md-4 bg-light">Article 1</article>
      <article className="col-md-4 bg-light">Article 1</article>
      <article className="col-md-4 bg-light">Article 1</article>
    </section>
  ) : (
    <div className="alert alert-info" role="alert">
      No testimonials at the moment
    </div>
  );
};

export default Testimonials;
