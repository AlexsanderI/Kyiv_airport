import React from 'react';
import BoardTable from '../table/BoardTable';
import './date.scss';

const DateBorder = () => {
  return (
    <div className="board__date">
      <div className="date__select">
        <input type="date" name="date" className="date__form"></input>
        <div className="date__icon">
          <div className="date__icon-text">14/09</div>
          <div className="date__icon-png"></div>
        </div>
        <div className="date__days">
          <div className="date__days-box yestarday">
            <div className="date__days-num">13/09</div>
            <div className="date__days-text">Yestarday</div>
          </div>
          <div className="date__days-box today">
            <div className="date__days-num">14/09</div>
            <div className="date__days-text">Today</div>
          </div>
          <div className="date__days-box tomorrow">
            <div className="date__days-num">15/09</div>
            <div className="date__days-text">Tomorrow</div>
          </div>
        </div>
      </div>
      <BoardTable />
    </div>
  );
};

export default DateBorder;
