import * as tasksGateway from '../FlightsGateway';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListRecived = flightList => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: {
      flightList,
    },
  };
  return action;
};

export const getFlightList = () => {
  const thunkAction = function (dispatch) {
    tasksGateway.fetchTaskList().then(flightList => {
      dispatch(tasksListRecived(flightList.body.departure));
    });
  };
  return thunkAction;
};
