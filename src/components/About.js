import React from 'react';
import "./about.css";

const About = () => {
  return (
    <section className="row mb-5">
      <article className="col-md-6 about-section">
        <p>
          Little Lemon is a charming neighbourhood bistro that serves a simple
          food and classic cocktails in a lively but casual environment.
        </p>
        <p>
          Co-owned by Adrian and Mario, the restaurant features a locally
          sourced menu with daily specials.
        </p>
      </article>
      <article className="col-md-6">
        <img
          className="img-fluid rounded"
          src="https://thumbs2.imgbox.com/b7/97/VqONgn8H_t.png"
          alt="Adrian and Mario"
        />
      </article>
    </section>
  );
};

export default About;
