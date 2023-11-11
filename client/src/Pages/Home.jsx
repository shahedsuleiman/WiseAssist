import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import OurPurpose from "../Components/OurPurpose";
import OurServices from "../Components/OurServices";
import Cards from "../Components/Cards";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <OurServices />
      <Footer />
    </div>
  );
}

export default Home;
