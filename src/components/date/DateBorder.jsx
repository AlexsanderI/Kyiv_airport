import React from 'react';
import { useSearchFlightDateQuery } from '../../redux/flightDate.api';
import FlightBoardTable from '../table/FlightBoardTable';
import './date.scss';
import moment from 'moment';
import { useState, useEffect } from 'react';
// import { setFlightDate } from '../../redux/flightDateSlice';
// import { useDispatch } from 'react-redux';

const DateBorder = () => {
  let createdDate = moment(new Date()).format();
  let tomorrow = moment(createdDate).add(1, 'd');
  let yestarday = moment(createdDate).subtract(1, 'd');
  const [calendarFormat, setCalendarFormat] = useState({
    date: moment(new Date()).format(),
  });

  const { date } = calendarFormat;

  // const dispatch = useDispatch();

  const { isLoading, isError, data } = useSearchFlightDateQuery('12-01-2022');

  useEffect(() => {
    console.log(data ? data.body.departure : null);
  }, [data]);

  const handleChangeDate = event => {
    setCalendarFormat({ ...calendarFormat, [event.target.name]: event.target.value });
    // dispatch(setFlightDate(calendarFormat));
  };

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
