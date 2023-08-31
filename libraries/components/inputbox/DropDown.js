import React from 'react';
const DropDown = ({ label, value, options,checked, onChange }) => {
  return (
    <div>
      <select value={value} key={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}key={value} >{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
