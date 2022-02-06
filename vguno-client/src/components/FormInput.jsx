import React from 'react';

const FormInput = (props) => {
    const {label,errorMessage, ...inputProps} = props;
  return <div className='form-input'>
      <label>{props.label}</label>
      <input 
      {...inputProps}
      onChange = {props.onChange}
      />
      <span>{props.error}</span>
  </div>;
};


export default FormInput;
