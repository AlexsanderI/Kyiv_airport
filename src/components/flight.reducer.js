import { FLIGHTS_DATA } from './tasks.actions';

const initialState = {
  flightData: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_DATA: {
      return { ...state, flightData: action.payload.flightData };
    }
    default:
      return state;
  }
};

export default tasksReducer;
