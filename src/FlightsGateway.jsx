const baseUrl = 'https://api.iev.aero/api/flights/11-01-2022';

export const createTask = taskDate =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskDate),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to create task');
    }
  });

export const fetchTaskList = () =>
  fetch(baseUrl).then(res => {
    if (!res.ok) {
      throw new Error('Failed to fetch tasks list');
    }
    return res.json();
  });
