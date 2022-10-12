import { TASKS_LIST_RECIEVED } from './flight.actions';

const initialState = {
  flightList: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LIST_RECIEVED: {
      return { ...state, flightList: action.payload.flightList };
    }
    default:
      return state;
  }
};

export default tasksReducer;
