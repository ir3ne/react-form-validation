import React from 'react';

const Input = (props) => {
  const { label, name, type, placeholder, handleChange } = props;
  return (
    <label className="h3">
      {label}:
      <input 
        label={label} 
        name={name} 
        type={type} 
        value={undefined} 
        placeholder={placeholder} 
        onChange={handleChange} 
        style={{marginTop: '6px'}} />
    </label>
  );
}

export default Input;