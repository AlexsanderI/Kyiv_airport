import React from 'react';
import { useSearchFlightDateQuery } from '../../redux/flightDate.api';
import FlightBoardTable from '../table/FlightBoardTable';
import NoFlight from '../noFlight/noFlight';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { setFlightDate } from '../../redux/flightDateSlice';
import { useDispatch } from 'react-redux';
import './date.scss';
import { useSelector } from 'react-redux';

const DateBorder = () => {
  let createdDate = moment(new Date()).format();
  let tomorrow = moment(createdDate).add(1, 'd');
  let yestarday = moment(createdDate).subtract(1, 'd');
  const [calendarFormat, setCalendarFormat] = useState(new Date());

  // const [searchData, setSearchData] = useState(null);

  // const search = useSelector(state => state.searchFlight.searchFlight);

  const dispatch = useDispatch();

  const { isLoading, isError, data } = useSearchFlightDateQuery(
    moment(calendarFormat).format('DD-MM-YYYY'),
  );

  // useEffect(() => {
  //   const departure = data ? data.body.departure : null;

  //   setSearchData(departure);
  //   if (search) {
  //     const searchFlight = data.body.departure.filter(
  //       flight => flight.codeShareData[0].codeShare === search,
  //     );
  //     setSearchData(searchFlight);
  //     console.log(searchFlight);
  //   }
  // }, [data, search]);

  const handleChangeDate = day => {
    const currentDate = moment(day).format('DD-MM-YYYY');
    setCalendarFormat(day);
    dispatch(setFlightDate(currentDate));
  };

  console.log(data);
  return (
    <div className="board__date">
      <div className="date__select">
        <input
          type="date"
          name="date"
          className="date__form"
          onChange={event => handleChangeDate(event.target.value)}
          value={calendarFormat}
        ></input>
        <div className="date__icon">
          <div className="date__icon-text">{moment(calendarFormat).format('DD/MM')}</div>
          <div className="date__icon-png"></div>
        </div>
        <div className="date__days">
          <div className="date__days-box yestarday" onClick={() => handleChangeDate(yestarday)}>
            <div className="date__days-num">{yestarday.format('DD/MM')}</div>
            <div className="date__days-text">Yestarday</div>
          </div>
          <div className="date__days-box today" onClick={() => handleChangeDate(createdDate)}>
            <div className="date__days-num">{moment(new Date()).format('DD/MM')}</div>
            <div className="date__days-text">Today</div>
          </div>
          <div className="date__days-box tomorrow" onClick={() => handleChangeDate(tomorrow)}>
            <div className="date__days-num">{tomorrow.format('DD/MM')}</div>
            <div className="date__days-text">Tomorrow</div>
          </div>
        </div>
      </div>
      <FlightBoardTable data={data} />
      {/* {searchData && searchData.length !== 0 ? (
        <FlightBoardTable data={searchData} />
      ) : (
        <NoFlight />
      )} */}
    </div>
  );
};

export default DateBorder;
