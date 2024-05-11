// components/Square.js
import React from 'react';
import './../App.css';

const Square = ({ value, rowIndex, colIndex }) => {
  const id = `${rowIndex}${colIndex}`;
  return <div className="gridSquare" id={id}>{value}</div>;
};

export default Square;