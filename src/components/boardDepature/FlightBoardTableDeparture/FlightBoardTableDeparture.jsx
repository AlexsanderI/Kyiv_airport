import React from 'react';
<<<<<<< HEAD:src/components/table/FlightBoardTable.jsx
import './flightBoardTable.scss';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import NoFlight from '../noFlight/noFlight';

const FlightBoardTable = ({ data }) => {
  // const [calendarFormat, setCalendarFormat] = useState(new Date());
  const [searchData, setSearchData] = useState(null);

  // const { isLoading, isError, data } = useSearchFlightDateQuery(
  //   moment(searchData).format('DD-MM-YYYY'),
  // );

  const search = useSelector(state => state.searchFlight.searchFlight);

  useEffect(() => {
    const departure = data ? data.body.departure : null;

    setSearchData(departure);
    if (search) {
      const searchFlight = data.body.departure.filter(
        flight => flight.codeShareData[0].codeShare === search,
      );
      setSearchData(searchFlight);
      console.log(searchFlight);
    }
  }, [data, search]);

  console.log(search);
=======
import './flightBoardTableDeparture.scss';
import moment from 'moment';

const FlightBoardTable = ({ data }) => {
>>>>>>> 21ebaa1:src/components/boardDepature/FlightBoardTableDeparture/FlightBoardTableDeparture.jsx
  {
    return (
      <table className="styled-table">
        <thead>
          <tr className="table__title">
            <td>Terminal</td>
            <td>Local time</td>
            <td>Destination</td>
            <td>Status</td>
            <td>Airline</td>
            <td>Flight</td>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map(flightNum => (
                <tr className="table__sheduel" key={flightNum.ID}>
                  <td>
                    <div className={flightNum.term}>{flightNum.term}</div>{' '}
                  </td>
                  <td>{moment(flightNum.timeDepShedule).format('HH:mm')}</td>
                  <td>{flightNum['airportToID.city_en']}</td>
                  <td>Departed at {moment(flightNum.timeTakeofFact).format('HH:mm')}</td>
                  <td>
                    <div className="logo">
                      <img
                        className="logo-image"
                        src={
                          `https://api.iev.aero/${flightNum.logo}` === undefined
                            ? `https://api.iev.aero/${flightNum.logo}`
                            : flightNum.airline.en.logoSmallName
                        }
                        alt="logo airline"
                      />
                      <div className="logo-name">{flightNum.airline.en.name}</div>
                    </div>
                  </td>
                  <td>{flightNum.codeShareData[0].codeShare}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    );
  }
};

export default FlightBoardTable;
