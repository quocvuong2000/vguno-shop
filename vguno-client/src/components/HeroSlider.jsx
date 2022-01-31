import React from 'react';
import PropTypes from 'prop-types';
import HeroSliderItem from './HeroSliderItem';


const HeroSlider = (props) => {

    const data = props.data;
    const slideIndex = 0;

  return <div className='container'>
      <div className="hero-slider">
      {data.map((item,index) => {
          return  <HeroSliderItem item={item} key={index} slide={index === slideIndex ? 'active' : '' }></HeroSliderItem>
      })}
      </div>
  </div>;
};

HeroSlider.propTypes = {
    data : PropTypes.array.isRequired,
    control: PropTypes.bool
};

export default HeroSlider;
