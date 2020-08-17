import * as fligthsGateway from './flights.gateway';
// import { tasksListSelector } from './flights.selectors';

export const SHOW_SPINNER = "SHOW_SPINNER";
export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';

export const showSpinner = () => {
  return {
      type: SHOW_SPINNER,
  }
}

export const flightsListRecieved = (flightsList) => {
  const action = {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsList,
    }
  }
  return action;
}

export const getFlightsList = () => {
  const thunkAction = function (dispatch) {
    dispatch(showSpinner())
    fligthsGateway
    .fetchFlightsList()
    .then(flightsList => dispatch(flightsListRecieved(flightsList)))
  };
  
  return thunkAction;
}

// export const updateTask = (taskId) => {
//   const thunkAction = function (dispatch, getState) {
//     const state = getState();
//     const tasksList = tasksListSelector(state);
//     const task = tasksList.find(task => task.id === taskId);
    
//     const updatedTask = {
//       ...task,
//       done: !task.done,
//     };
//     tasksGateway
//       .updateTask(taskId, updatedTask)
//       .then(() => dispatch(getTaskList()))
//   };
  
//   return thunkAction;
// };

// export const deleteTask = (taskId) => {
//   const thunkAction = function (dispatch) {
//     tasksGateway
//       .deleteTask(taskId)
//       .then(() => dispatch(getTaskList()))
//   };
  
//   return thunkAction;
// };

// export const createTask = (text) => {
//   const thunkAction = function (dispatch) {
//     const taskData = {
//       text,
//       done: false,
//       createdAt: new Date().toISOString(),
//     }
//     tasksGateway
//       .createTask(taskData)
//       .then(() => dispatch(getTaskList()))
//   };
  
//   return thunkAction;
// };