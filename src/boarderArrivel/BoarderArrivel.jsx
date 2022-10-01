import React from 'react';
import './boarderArrivel.scss';

const BoarderArrivel = () => {
  return (
    <div className="board">
      <div className="board__departure-arrivel">
        <button className="board__departure">
          <span className="board__departure-icon">departure</span>
        </button>
        <button className="board__arrivel">
          <span className="board__arrivel-icon">arrivel</span>
        </button>
      </div>
    </div>
  );
};

export default BoarderArrivel;
