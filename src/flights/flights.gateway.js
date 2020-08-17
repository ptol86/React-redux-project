const baseUrl = 'https://api.iev.aero/api/flights/10-02-2020';

// export const createTask = taskData => {
//     return fetch(baseUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;utc-8'
//       },
//       body: JSON.stringify(taskData),
//   }).then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to create task'); 
//       }
//   });
// }

export const fetchFlightsList = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Failed to get flights list'); 
    });
};


// export const updateTask = (taskId, taskData) => {
//       return fetch(`${baseUrl}/${taskId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(taskData),
//       }).then(response => {
//           if (!response.ok) {
//             throw new Error('Failed to update task');
//           }
//       }); 
// };

// export const deleteTask = taskId => {
//     return fetch(`${baseUrl}/${taskId}`, {
//           method: 'DELETE'
//         }).then(response => {
//           if (!response.ok) {
//             throw new Error('Failed to delete task');
//           }
//     });
// }