import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as flightActions from '../flight.actions';
import './flightBoardTable.scss';
import { fliteListSelector } from '../tasks.selectors';

class FlightBoardTable extends React.Component {
  componentDidMount() {
    this.props.fetchFlightList();
  }
  render() {
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
            <td>A</td>
            <td>1:20</td>
            <td>Warsaw</td>
            <td>Landed 1:28</td>
            <td>LOT</td>
            <td>LO755</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

FlightBoardTable.propTypes = {
  fetchFlightList: PropTypes.func.isRequired,
  flites: PropTypes.arrayOf(PropTypes.shape()),
};

const mapDispatch = {
  fetchFlightList: flightActions.fetchFlightList,
};

const mapState = state => {
  return {
    flites: fliteListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(FlightBoardTable);
