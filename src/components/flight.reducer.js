import { TASKS_LIST_RECIEVED } from './flight.actions';

const initialState = {
  departure: [],
  arrival: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LIST_RECIEVED: {
      return { ...state, departure: action.payload.departure, arrival: action.payload.arrival };
    }
    default:
      return state;
  }
};

export default tasksReducer;
