import React, { useRef } from "react";
import PropTypes from "prop-types";

//use Ref to take checked property

const Checkbox = (props) => {
  const inputRef = useRef(null);
  const handleOnChange = () => {
    if (props.onChange) {
      return props.onChange(inputRef.current);
    }
  };
  return (
    <label className="checkbox-custom">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={handleOnChange}
        ref={inputRef}
      />
      <span className="checkbox-custom__landmark">
        <i className="bx bx-check"></i>
      </span>
      {props.label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
