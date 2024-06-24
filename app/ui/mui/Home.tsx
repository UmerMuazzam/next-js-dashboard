import React from 'react'
import Products from './Products';
import Footer from './Footer';
import AppBar from './Navbar';
import Banner from './Banner';

const Home = () => {
  return (
    <div>
      <AppBar />
      <Banner />
      <Products/>
      <Footer/>
    </div>
  );
}

export default Home
