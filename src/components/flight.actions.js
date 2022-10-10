import { tasksListSelector } from './tasks.selectors';
import getFlightList from './../FlightsGateway';

export const FLIGHTS_DATA = 'FLIGHTS_DATA';

export const tasksListRecived = flightData => {
  const action = {
    type: FLIGHTS_DATA,
    payload: {
      flightData,
    },
  };
  return action;
};

export const fetchFlightList = () => {
  const thunkAction = function (dispatch) {
    getFlightList().then(flightData => dispatch(tasksListRecived(flightData)));
  };
  return thunkAction;
};

// export const fetchUserDate = userName => {
//   return function (dispatch) {
//     getFlightList(userName).then(userData => {
//       dispatch(userDataRecived(userData));
//     });
//   };
// };
