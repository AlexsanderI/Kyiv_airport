import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as flightActions from '../flight.actions';
import './flightBoardTable.scss';
import { flightSelector } from '../flight.selectors';
import { array } from 'prop-types';

class FlightBoardTable extends React.Component {
  componentDidMount() {
    this.props.getFlightList();
  }

  render() {
    const a = this.props.flights.map(flight => flight.ID);
    console.log(Array.isArray(this.props.flights), a);
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
          <tr className="table__sheduel">
            {/* {this.props.tasks.body.departure.map(task => {
              console.log(task.ID);
            })} */}
          </tr>
        </tbody>
      </table>
    );
  }
}

// FlightBoardTable.propTypes = {
//   getFlightList: PropTypes.func.isRequired,
//   flights: PropTypes.object.isRequired,
// };

const mapDispatch = {
  getFlightList: flightActions.getFlightList,
};

const mapState = state => {
  return {
    flights: flightSelector(state),
  };
};

export default connect(mapState, mapDispatch)(FlightBoardTable);
