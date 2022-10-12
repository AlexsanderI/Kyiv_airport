import { createSelector } from 'reselect';

export const flightSelector = state => state.flights.flightList;

// export const sortedTasckListSorted = createSelector([tasksListSelector], tasksList => {
//   return tasksList.slice().sort((a, b) => a.done - b.done);
// });
