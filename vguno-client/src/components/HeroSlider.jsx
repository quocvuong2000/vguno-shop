import React, { useState } from "react";
import PropTypes from "prop-types";
import HeroSliderItem from "./HeroSliderItem";

const HeroSlider = (props) => {
  const [slide, setSlide] = useState(0);

  const data = props.data;

  const prevSlide = () => {
    setSlide(slide - 1 < 0 ? data.length - 1 : slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide + 1 === data.length ? 0 : slide + 1);
  }

  return (
    <div className="hero-slider">
      {data.map((item, index) => {
        return (
          <HeroSliderItem
            item={item}
            key={index}
            slide={index === slide ? "active" : ""}
          ></HeroSliderItem>
        );
      })}
      {props.control ? (
        <div className="hero-slider__control">
          <div className="hero-slider__control__left" onClick={prevSlide}>
            <i className="bx bx-chevron-left"></i>
          </div>
          <div className="hero-slider__control__right" onClick={nextSlide}>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
};

export default HeroSlider;
