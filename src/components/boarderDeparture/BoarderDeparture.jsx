import React from 'react';
import { useState } from 'react';
import './boarderDeparture.scss';

const BoarderDeparture = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="board">
      <div className="board__departure-arrivel">
        <button
          className={isActive ? 'board__departure-on' : 'board__departure'}
          disabled={isActive ? 'disabled' : ''}
          onClick={handleClick}
        >
          <span className="board__departure-icon">departure</span>
        </button>
        <button
          className={isActive ? 'board__arrivel-off' : 'board__arrivel'}
          disabled={isActive ? '' : 'disabled'}
          onClick={handleClick}
        >
          <span className="board__arrivel-icon">arrivel</span>
        </button>
      </div>
    </div>
  );
};

export default BoarderDeparture;
