import React from 'react';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import HeroSection from './HeroSection';
import StatsCard from './StatsCard';
import ClientsSection from './ClientsSection';
import ShipRates from './ShipRates';
import { Link } from 'react-router-dom';
import Line from './Line';
const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsCard />
      <ClientsSection />
      <ShipRates />
      <Footer />
    </div>
  );
};

export default Home;
