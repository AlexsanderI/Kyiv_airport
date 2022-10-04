import { tasksListSelector } from './tasks.selectors';
import getFlightList from './../FlightsGateway';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListRecived = fliteList => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: {
      fliteList,
    },
  };
  return action;
};

export const fetchFlightList = () => {
  const thunkAction = function (dispatch) {
    getFlightList().then(fliteList => dispatch(tasksListRecived(fliteList)));
  };
  return thunkAction;
};
