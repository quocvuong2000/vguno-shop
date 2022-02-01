import React from "react";

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";

import heroSilderData from "../assets/fake-api/hero-slider";
import policyData from "../assets/fake-api/policy";

const Home = () => {
  return (
    <Helmet name="Trang chủ">
      {/* Hero slider section */}
      <HeroSlider data={heroSilderData} control={true}></HeroSlider>
      {/* END Hero slider section */}

      {/* Card policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={40}>
            {policyData.map((item, index) => {
              return (
                <PolicyCard
                  key={index}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                ></PolicyCard>
              );
            })}
          </Grid>
        </SectionBody>
      </Section>
      {/* End Card policy section */}

      {/* Newest product */}
      <Section>
        <SectionTitle>sản phẩm mới nhất</SectionTitle>
        <SectionBody>Hello</SectionBody>
      </Section>
      {/* End Newest product */}
    </Helmet>
  );
};

export default Home;
