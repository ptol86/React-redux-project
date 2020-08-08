// import { createSelector } from 'reselect';

export const flightsListSelector = state => 
  state.flightsList;

// export const sortedTasksListSelector = createSelector(
//   [tasksListSelector],
//   (tasksList) => {
//     return tasksList.slice()
//     .sort((a, b) => a.done - b.done);
//   },
// );