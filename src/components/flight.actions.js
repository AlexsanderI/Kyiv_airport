import * as tasksGateway from '../FlightsGateway';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListRecived = data => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: {
      departure: data.body.departure,
      arrival: data.body.arrival,
    },
  };
  return action;
};

export const getFlightList = date => {
  const thunkAction = function (dispatch) {
    tasksGateway.fetchTaskList(date).then(flightList => {
      dispatch(tasksListRecived(flightList));
    });
  };
  return thunkAction;
};
