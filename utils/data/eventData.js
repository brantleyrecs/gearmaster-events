import { clientCredentials } from '../client';

const getEvents = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleEvent = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => {
      console.warn('Error retrieving event:', error);
      reject(error);
    });
});

const createEvent = (order) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.error('Error: Event not Created:', error);
      reject(error);
    });
});

const updateEvent = (id, currentEvent) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(currentEvent),
  })
    .then(resolve)
    .catch(reject);
});

const deleteEvent = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      resolve();
    })
    .catch(reject);
});

const addGear = (id, gear) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${id}/event_gear`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gear),
  })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.error('Error: Gear was not added:', error);
      reject(error);
    });
});

const removeGear = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/event_gear/${id}`, {
    method: 'DELETE',
  })
    .then(resolve())
    .catch(reject);
});

export {
  getEvents,
  getSingleEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  addGear,
  removeGear,
};
