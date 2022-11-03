import React from 'react';
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
  {
    return (
      <>
        {searchData && searchData.length !== 0 ? (
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
                ? data.body.departure.map(flightNum => (
                    <tr className="table__sheduel" key={flightNum.ID}>
                      <td>
                        <div className={flightNum.term}>{flightNum.term}</div>{' '}
                      </td>
                      <td>{moment(flightNum.timeDepExpectCalc).format('hh:mm')}</td>
                      <td>{flightNum['airportToID.city_en']}</td>
                      <td>Departed at {moment(flightNum.timeTakeofFact).format('hh:mm')}</td>
                      <td>{flightNum.airline.en.name}</td>
                      <td>{flightNum.codeShareData[0].codeShare}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        ) : (
          <NoFlight />
        )}
      </>
    );
  }
};

export default FlightBoardTable;
