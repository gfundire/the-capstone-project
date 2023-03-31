import React from 'react';
import Main from './Main';
import CallToAction from './CallToAction';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

const Home = () => {
  return (
    <>
      <Main>
        <CallToAction/>
        <Specials/>
        <Testimonials/>
        <About/>
      </Main>
    </>
  );
};

export default Home;
