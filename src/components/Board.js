// components/Board.js
import React from 'react';
import Square from './Square';
import './../App.css';

const Board = ({ grid }) => {
  return (
    <div id="game">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((letter, colIndex) => (
            <Square
              key={`${rowIndex}${colIndex}`}
              value={letter || ''}
              rowIndex={rowIndex}
              colIndex={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;