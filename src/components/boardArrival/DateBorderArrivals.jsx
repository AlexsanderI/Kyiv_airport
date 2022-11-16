import React from 'react';
import { useSearchFlightDateQuery } from '../../redux/flightDate.api';
import FlightBoardTableArrivals from './FlightBoardTableArrivals/FlightBoardTableArrivals';
import NoFlight from '../noFlight/noFlight';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { setFlightDate } from '../../redux/flightDateSlice';
import { useDispatch } from 'react-redux';
import './date.scss';
import { useSelector } from 'react-redux';

const DateBorderArrivals = () => {
  let createdDate = moment(new Date()).format();
  let tomorrow = moment(createdDate).add(1, 'd');

  let yestarday = moment(createdDate).subtract(1, 'd');

  let saveDate = useSelector(state => state.flightDate.flightDate);
  // saveDate = moment(saveDate).format('DD-MM-YYYY');
  const [calendarFormat, setCalendarFormat] = useState(saveDate ? saveDate : createdDate);

  const [searchData, setSearchData] = useState(null);

  const search = useSelector(state => state.searchFlight.searchFlight);

  const dispatch = useDispatch();
  console.log(calendarFormat);
  const { isLoading, isError, data } = useSearchFlightDateQuery(calendarFormat);

  useEffect(() => {
    setCalendarFormat(saveDate);

    const arrival = data ? data.body.arrival : null;

    setSearchData(arrival);
    if (search) {
      const searchFlight = data.body.arrival.filter(
        flight => flight.codeShareData[0].codeShare === search,
      );
      setSearchData(searchFlight);
    }
  }, [data, search]);

  const handleChangeDate = day => {
    const currentDate = moment(day).format('DD-MM-YYYY');
    setCalendarFormat(currentDate);
    dispatch(setFlightDate(currentDate));
  };

  let showFlights = '';

  if (searchData) {
    showFlights =
      searchData.length !== 0 ? <FlightBoardTableArrivals data={searchData} /> : <NoFlight />;
  }

  console.log(
    'calendarFormat',
    [calendarFormat.split('-')[0], calendarFormat.split('-')[1]].join('/'),
  );
  console.log('saveDate', saveDate);

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
          <div className="date__icon-text">
            {
              // moment(data).format('DD/MM')
              [calendarFormat.split('-')[0], calendarFormat.split('-')[1]].join('/')
            }
          </div>
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

      {/* {showFlights} */}

      {searchData !== null ? (
        searchData.length !== 0 ? (
          <FlightBoardTableArrivals data={searchData} />
        ) : (
          <NoFlight />
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default DateBorderArrivals;
