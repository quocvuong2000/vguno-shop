import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HeroSliderItem = (props) => {
  const item = props.item;
  return (
    <div className={`hero-slider__item ${props.slide}`}>
      <div className="hero-slider__item__info">
        <div className="hero-slider__item__info__title">
          <span>{item.title}</span>
        </div>
        <div className="hero-slider__item__info__description">
          <span>{item.description}</span>
        </div>
        <div className="hero-slider__info__btn">
          <button>
            <Link to={"/"}>Mua ngay</Link>
          </button>
        </div>
      </div>
      <div className="hero-slider__item__image">
        <img src={item.img} alt="" />
      </div>
    </div>
  );
};

HeroSliderItem.propTypes = {
  item: PropTypes.object,
  slide: PropTypes.string,
};

export default HeroSliderItem;
