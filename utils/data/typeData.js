import { clientCredentials } from '../client';

const getType = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/type`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleType = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/type/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => {
      reject(error);
    });
});

export { getSingleType, getType };
