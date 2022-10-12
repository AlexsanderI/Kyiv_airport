const baseUrl = 'https://api.iev.aero/api/flights/11-01-2022';

export const fetchTaskList = () =>
  fetch(baseUrl).then(res => {
    if (!res.ok) {
      throw new Error('Failed to fetch tasks list');
    }
    return res.json();
  });
