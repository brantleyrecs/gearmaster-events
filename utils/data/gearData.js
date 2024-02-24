import { clientCredentials } from '../client';

const getGear = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gear`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleGear = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gear/${id}`, {
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

const createGear = (gear) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gear`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gear),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.error('Error: Gear not Created:', error);
      reject(error);
    });
});

const updateGear = (id, currentGear) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gear/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(currentGear),
  })
    .then(resolve)
    .catch(reject);
});

export {
  getGear, getSingleGear, createGear, updateGear,
};
