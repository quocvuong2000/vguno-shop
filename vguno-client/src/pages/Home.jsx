import React from "react";

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import Blog from "../components/Blog";

import heroSilderData from "../assets/fake-api/hero-slider";
import policyData from "../assets/fake-api/policy";
import productData from "../assets/fake-api/products";
import msi from "../assets/images/banner/msi.jpg";

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
        <SectionBody>
          <div className="container">
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {productData.getNumberProducts(8).map((item, index) => {
                return <ProductCard key={index} product={item}></ProductCard>;
              })}
            </Grid>
          </div>
        </SectionBody>
      </Section>
      {/* End Newest product */}

      {/* sub Banner */}
      <Section>
        <SectionBody>
          <img src={msi} alt="" className="sub-banner" />
        </SectionBody>
      </Section>
      {/* end sub Banner */}

      {/* hotsalse product */}
      <Section>
        <SectionTitle>bán chạy nhất</SectionTitle>
        <SectionBody>
          <div className="container">
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {productData.getNumberProducts(4).map((item, index) => {
                return <ProductCard key={index} product={item}></ProductCard>;
              })}
            </Grid>
          </div>
        </SectionBody>
      </Section>
      {/* End hotsalse product */}

      {/* Blog section */}
      <Section>
        <SectionTitle>
          Blog
        </SectionTitle>
        <SectionBody>
          <div className="container">
            <Blog></Blog>
          </div>
        </SectionBody>
      </Section>
      {/* END Blog section */}
    </Helmet>
  );
};

export default Home;
