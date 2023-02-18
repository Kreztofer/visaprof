import React, { useState } from 'react';

import {
  AboutUs,
  Clients,
  HeroLowerDesign,
  HeroSection,
  Navbar,
  PopularDestination,
  Testimonial,
  TopDestination,
  FrequentQuestions,
  Form,
  Footer,
} from '../components';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <Navbar open={open} setOpen={setOpen} />
      <HeroSection />
      <HeroLowerDesign />
      <AboutUs />
      <Clients />
      <TopDestination />
      <PopularDestination />
      <Testimonial />
      <FrequentQuestions />
      <Form />
      <Footer />
    </div>
  );
};

export default HomePage;
