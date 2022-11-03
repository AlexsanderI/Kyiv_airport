import React from 'react';
import './flightBoardTableDeparture.scss';
import moment from 'moment';

const FlightBoardTable = ({ data }) => {
  // const [departure, setDeparture] = useState({ data });
  console.log(data);
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
    );
  }
};

export default FlightBoardTable;
