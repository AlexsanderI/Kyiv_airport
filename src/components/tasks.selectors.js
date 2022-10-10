import { createSelector } from 'reselect';

export const fliteListSelector = state => state.task.flightData;

// export const sortedTasckListSorted = createSelector([tasksListSelector], tasksList => {
//   return tasksList.slice().sort((a, b) => a.done - b.done);
// });
