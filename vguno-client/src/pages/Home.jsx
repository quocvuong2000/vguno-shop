import React from "react";

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";

import heroSilderData from "../assets/fake-api/hero-slider";

const Home = () => {
  return (
    <Helmet name="Trang chủ">
      {/* Hero slider section */}
      <HeroSlider data={heroSilderData} control={true}></HeroSlider>
      {/* END Hero slider section */}
    </Helmet>
  );
};

export default Home;
