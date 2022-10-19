import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import * as flightActions from '../flight.actions';
import './flightBoardTable.scss';
// import { flightSelector, flightSelectorArrival } from '../flight.selectors';
// import { array } from 'prop-types';
import { useState } from 'react';

const FlightBoardTable = () => {
  const [departure, setDeparture] = useState({});

  {
    // const a = this.props.flights.map(flight => flight.ID);
    // console.log(Array.isArray(this.props.flights), a);
    // console.log(this.props.arrivals);
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
          {/* {this.props.flights.map(flight => ( */}
          <tr className="table__sheduel">
            <td>A</td>
            <td>1:20</td>
            <td>Warsawa</td>
            <td>Departed at 2:20</td>
            <td>LOT</td>
            <td>LOT2349</td>
          </tr>
        </tbody>
      </table>
    );
  }
};

// FlightBoardTable.propTypes = {
//   getFlightList: PropTypes.func.isRequired,
//   flights: PropTypes.object.isRequired,
// };

// const mapDispatch = {
//   getFlightList: flightActions.getFlightList,
// };

// const mapState = state => {
//   return {
//     flights: flightSelector(state),
//     arrivals: flightSelectorArrival(state),
//   };
// };

// export default connect(mapState, mapDispatch)(FlightBoardTable);

export default FlightBoardTable;
