import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './buttonDeparureArrival.scss';

const ButtonDeparureArrival = () => {
  const [isActive, setIsActive] = useState(false);
  let departure = useHistory();
  let arrival = useHistory();

  const handleClickDeparture = () => {
    setIsActive(!isActive);
    departure.push('/departure');
  };
  const handleClickArrivel = () => {
    setIsActive(!isActive);

    arrival.push('/arrival');
  };
  return (
    <div className="board">
      <div className="board__departure-arrival">
        <button
          className={isActive ? 'board__departure-on' : 'board__departure'}
          disabled={isActive ? 'disabled' : ''}
          onClick={handleClickDeparture}
        >
          {/* <div></div> */}
          <div className="board__departure-icon"></div>
          departure
        </button>
        <button
          className={isActive ? 'board__arrivel-off' : 'board__arrivel'}
          disabled={isActive ? '' : 'disabled'}
          onClick={handleClickArrivel}
        >
          <div className="board__arrival-icon">arrival</div>
        </button>
      </div>
    </div>
  );
};

export default ButtonDeparureArrival;
