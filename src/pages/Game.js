// Game.js
import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import Keyboard from '../components/Keyboard';
import './../App.css';

const dictionary = ["PRUDE", "TRASH", "SKANK", "BITCH", "SNAKE", "TOWER"];
const Game = () => {
  const [grid, setGrid] = useState([
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null]
  ]);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [todaysWord, setTodaysWord] = useState('BROAD');
  const [letterClickNotAllowed, setLetterClickNotAllowed] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    setTodaysWord(dictionary[randomIndex]);
  }, []);

  const arrayToLetterCount = () => {
    const targetObject = {};
    for (let i = 0; i < todaysWord.length; i++) {
      const letter = todaysWord[i];
      targetObject[letter] = (targetObject[letter] || 0) + 1;
    }
    return targetObject;
  };

  const handleClick = (letter) => {
    if (letterClickNotAllowed) return;

    const newGrid = [...grid];
    newGrid[currentRow][currentCol] = letter;
    setGrid(newGrid);

    if (currentCol < 4) {
      setCurrentCol(currentCol + 1);
    } else {
      setCurrentCol(5);
      setLetterClickNotAllowed(true);
    }
  };

  const handleEnter = () => {
    if (currentCol === 5) {
      if (checkIfWin(arrayToLetterCount())) {
        alert('Woohoooo You WIN');
      } else {
        setLetterClickNotAllowed(false);
        setCurrentRow(currentRow + 1);
        setCurrentCol(0);
      }
    }
  };

  const handleDelete = () => {
    if (currentCol === 0) return;

    const newGrid = [...grid];
    newGrid[currentRow][currentCol - 1] = '';
    setGrid(newGrid);
    setCurrentCol(currentCol - 1);
    setLetterClickNotAllowed(false);
  };

  const checkIfWin = (letterCountMap) => {
    const userWord = grid[currentRow].join('').toUpperCase();

    for (let i = 0; i < userWord.length; i++) {
      if (userWord[i] === todaysWord[i]) {
        const targetIdOfGrid = `${currentRow}${i}`;
        const gridElement = document.getElementById(targetIdOfGrid);
        gridElement.style.backgroundColor = 'green';

        const targetIdOfKeyboard = userWord[i];
        const keyboardElement = document.getElementById(targetIdOfKeyboard);
        keyboardElement.style.backgroundColor = 'green';
        letterCountMap[targetIdOfKeyboard]--;
      }
    }

    for (let i = 0; i < userWord.length; i++) {
      const targetIdOfGrid = `${currentRow}${i}`;
      const gridElement = document.getElementById(targetIdOfGrid);
      const targetIdOfKeyboard = userWord[i];
      const keyboardElement = document.getElementById(targetIdOfKeyboard);

      if (gridElement.style.backgroundColor !== 'green') {
        for (let j = 0; j < todaysWord.length; j++) {
          if (userWord[i] === todaysWord[j] && letterCountMap[targetIdOfKeyboard] > 0) {
            gridElement.style.backgroundColor = 'yellow';
            keyboardElement.style.backgroundColor = 'yellow';
            letterCountMap[targetIdOfKeyboard]--;
          }
        }
      }
    }

    for (let i = 0; i < userWord.length; i++) {
      const targetIdOfGrid = `${currentRow}${i}`;
      const gridElement = document.getElementById(targetIdOfGrid);
      const targetIdOfKeyboard = userWord[i];
      const keyboardElement = document.getElementById(targetIdOfKeyboard);

      if (gridElement.style.backgroundColor !== 'green' && gridElement.style.backgroundColor !== 'yellow') {
        gridElement.style.backgroundColor = 'grey';
      }
      if (keyboardElement.style.backgroundColor !== 'green' && keyboardElement.style.backgroundColor !== 'yellow') {
        keyboardElement.style.backgroundColor = 'grey';
      }
    }

    return userWord === todaysWord.toUpperCase();
  };

  return (
    <div className="game-container">
      <h1 className="title">Wordle</h1>
      <div className="game">
        <Board grid={grid} />
        <Keyboard
          handleClick={handleClick}
          handleEnter={handleEnter}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Game;