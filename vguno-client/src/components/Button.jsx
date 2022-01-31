import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const animate = props.animate ? "btn-animate" : "";
  const size = props.size ? `btn-${props.size}` : "";
  return (
    <button
      className={`btn ${animate} ${size}`}
      onClick={() => props.onClick()}
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
};

export default Button;
