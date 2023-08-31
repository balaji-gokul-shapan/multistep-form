import React from 'react';

const buttons = ({ id, type, name, value, onClick, disabled, hidden }) => {
  return (
    <div>
      <button
        hidden={hidden}
        type={type}
        id={id}
        name={name}
        disabled={disabled}
        onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default buttons;
