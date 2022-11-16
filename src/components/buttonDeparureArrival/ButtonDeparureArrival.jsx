import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './buttonDeparureArrival.scss';

const ButtonDeparureArrival = () => {
  const [isActive, setIsActive] = useState(false);
  let history = useHistory();

  const handleClick = () => {
    setIsActive(!isActive);
    history.push('/departure');
  };
  return (
    <div className="board">
      <div className="board__departure-arrival">
        <button
          // to="/departure"
          className={isActive ? 'board__departure-on' : 'board__departure'}
          disabled={isActive ? 'disabled' : ''}
          onClick={handleClick}
        >
          <span className="board__departure-icon">departure</span>
        </button>
        <Link
          to="/arrival"
          className={isActive ? 'board__arrivel-off' : 'board__arrivel'}
          disabled={isActive ? '' : 'disabled'}
          onClick={handleClick}
        >
          <span className="board__arrival-icon">arrival</span>
        </Link>
      </div>
    </div>
  );
};

export default ButtonDeparureArrival;
