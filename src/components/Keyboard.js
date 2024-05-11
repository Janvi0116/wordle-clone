// components/Keyboard.js
import React from 'react';
import Key from './Key';
import './../App.css';

const Keyboard = ({ handleClick, handleEnter, handleDelete }) => {
  const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM';

  return (
    <div id="keyBoard">
      <div className="row">
        {letters.slice(0, 10).split('').map((letter) => (
          <Key key={letter} value={letter} handleClick={handleClick} />
        ))}
      </div>
      <div className="row">
        {letters.slice(10, 19).split('').map((letter) => (
          <Key key={letter} value={letter} handleClick={handleClick} />
        ))}
      </div>
      <div className="row">
        <div id="enter" onClick={handleEnter}>
          ENTER
        </div>
        {letters.slice(19).split('').map((letter) => (
          <Key key={letter} value={letter} handleClick={handleClick} />
        ))}
        <div id="delete" onClick={handleDelete}>
          DELETE
        </div>
      </div>
    </div>
  );
};

export default Keyboard;