import React from 'react';
import './../App.css';

const RulesModal = ({ onClose }) => {
  const handleNeverShowAgain = () => {
    localStorage.setItem('wordleRulesShown', 'true');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>How to Play</h2>
        <div className="rules">
          <p>Guess the word in 6 tries!</p>
          <ul>
            <li>Each guess must be a 5-letter word</li>
            <li>The color of the tiles will change to show how close your guess was:</li>
          </ul>
          <div className="examples">
            <div className="example">
              <div className="grid-square green">W</div>
              <span>Letter is in the word and in the correct spot</span>
            </div>
            <div className="example">
              <div className="grid-square yellow">I</div>
              <span>Letter is in the word but in the wrong spot</span>
            </div>
            <div className="example">
              <div className="grid-square grey">U</div>
              <span>Letter is not in the word</span>
            </div>
          </div>
        </div>
        <div className="modal-buttons">
          <button onClick={handleNeverShowAgain}>Don't show again</button>
          <button onClick={onClose}>Play</button>
        </div>
      </div>
    </div>
  );
};

export default RulesModal; 