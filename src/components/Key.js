// components/Key.js
import React from 'react';
import './../App.css';

const Key = ({ value, handleClick }) => {
  const isLetter = /^[A-Z]$/;

  return (
    <div
      className={isLetter.test(value) ? 'keyboardLetters' : ''}
      id={value}
      onClick={() => handleClick(value)}
    >
      {value}
    </div>
  );
};

export default Key;