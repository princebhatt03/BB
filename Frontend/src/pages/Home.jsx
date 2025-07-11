import React from 'react';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import TopProducts from '../components/TopProducts/TopProducts';
import Banner from '../components/Banner/Banner';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = ({ handleOrderPopup }) => {
  return (
    <>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Testimonials />
      <Banner />
    </>
  );
};

export default Home;
