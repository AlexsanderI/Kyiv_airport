import React from 'react';
import FlightBoardTable from '../table/FlightBoardTable';
import './date.scss';
import moment from 'moment';
import { useState } from 'react';

const DateBorder = () => {
  let createdDate = moment(new Date()).format();
  let tomorrow = moment(createdDate).add(1, 'd');
  let yestarday = moment(createdDate).subtract(1, 'd');
  const [calendarFormat, changeDate] = useState({
    date: moment(new Date()).format(),
  });

  const { date } = calendarFormat;

  const handleChangeDate = event => {
    changeDate({ ...calendarFormat, [event.target.name]: event.target.value });
  };

  console.log(moment(date).format('DD/MM'));
  return (
    <div className="board__date">
      <div className="date__select">
        <input
          type="date"
          name="date"
          className="date__form"
          onChange={handleChangeDate}
          value={date}
        ></input>
        <div className="date__icon">
          <div className="date__icon-text">{moment(date).format('DD/MM')}</div>
          <div className="date__icon-png"></div>
        </div>
        <div className="date__days">
          <div className="date__days-box yestarday">
            <div className="date__days-num">{yestarday.format('DD/MM')}</div>
            <div className="date__days-text">Yestarday</div>
          </div>
          <div className="date__days-box today">
            <div className="date__days-num">{moment(new Date()).format('DD/MM')}</div>
            <div className="date__days-text">Today</div>
          </div>
          <div className="date__days-box tomorrow">
            <div className="date__days-num">{tomorrow.format('DD/MM')}</div>
            <div className="date__days-text">Tomorrow</div>
          </div>
        </div>
      </div>
      <FlightBoardTable />
    </div>
  );
};

export default DateBorder;
