import React, {useState} from 'react';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
    const {label,errorMessage,onChange, ...inputProps} = props;

    const onBlurHandler = () => {
      setFocused(true);
    }
  return <div className='form-input'>
      <label>{label}</label>
      <input 
      {...inputProps}
      onChange = {onChange}
      autoComplete="off"
      onBlur={onBlurHandler}
      focused = {focused.toString()}
      />
      <span>{errorMessage}</span>
  </div>;
};


export default FormInput;
