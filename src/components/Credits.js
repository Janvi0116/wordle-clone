import React, { useState } from 'react';
import './Credits.css';

const Credits = () => {
  const [showLearnings, setShowLearnings] = useState(false);

  const learnings = [
    "React Hooks (useState, useEffect)",
    "Event Handling",
    "DOM Manipulation",
    "State Management",
    "Component Architecture",
    "CSS Styling and Animations",
    "LocalStorage Usage",
    "Keyboard Events",
    "Modal Implementation",
    "Array Manipulation",
    "Game Logic Implementation"
  ];

  return (
    <div className="credits-container">
      <div className="credits-content">
        <p>Made with ❤️ by Janvi Arora</p>
        <a 
          href="https://github.com/Janvi0116" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <div 
          className="learnings-trigger"
          onMouseEnter={() => setShowLearnings(true)}
          onMouseLeave={() => setShowLearnings(false)}
        >
          Things I Learned
          {showLearnings && (
            <div className="learnings-modal">
              <ul>
                {learnings.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Credits; 