import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about p-5 row">
      {/* <div className="container"> */}
        {/* <div className="px-5 row"> */}
          <article className="col-md-6 about-section">
            <h3 className="text-white display-title">Little Lemon</h3>
            <h4 className="text-white mb-5 sub-title">Chicago</h4>
            <p>
              Little Lemon is a charming neighbourhood bistro that serves a
              simple food and classic cocktails in a lively but casual
              environment.
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
        {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default About;
