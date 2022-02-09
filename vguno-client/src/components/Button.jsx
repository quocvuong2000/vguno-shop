import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const animate = props.animate ? "btn-animate" : "";
  const size = props.size ? `btn-${props.size}` : "";
  const stable = props.stable ? `btn-${props.stable}` : "";
  const animate2 = props.animate2 ? "btn-animate2" : "";
  const animate3 = props.animate3 ? "btn-animate3" : "";
  return (
    <button
      className={`btn ${animate} ${size} ${animate2} ${animate3} ${stable}`}
      onClick={props.onClick}
    >
      <div className="btn__txt">
        <span>{props.children}</span>
      </div>
      <div className="btn__icon">
        <i className={`bx ${props.icon} bx-tada`}></i>
      </div>
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  animate: PropTypes.bool,
  size: PropTypes.string,
  onClick: PropTypes.func,
  animate2: PropTypes.bool,
  stable : PropTypes.bool
};

export default Button;
