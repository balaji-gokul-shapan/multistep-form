import React from 'react';

const Inputbox = ({ inputType, id, name, label, placeholder, onChange, value, checked, min, max}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input type={inputType} name={name} label={label} placeholder={placeholder} min={min} max={max} onChange={onChange} value={value} checked={checked} />
    </div>
  );
};

export default Inputbox;
