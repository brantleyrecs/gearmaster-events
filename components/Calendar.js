/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { getEvents } from '../utils/data/eventData';

function Calendar() {
  const [events, setEvents] = useState([]);

  function combineDateTime(date, time) {
  // Split date and time strings
    const [year, month, day] = date.split('-');
    const [hour, minute] = time.split(':');

    // Create a new Date object with the provided date and time
    const combinedDateTime = new Date(year, month - 1, day, hour, minute);

    // Format the combined date and time as ISO string
    return combinedDateTime.toISOString();
  }

  useEffect(() => {
    // Fetch events and update state
    getEvents().then((data) => {
      setEvents(data.map((event) => ({
        id: event.id,
        title: event.name,
        start: combineDateTime(event.date, event.time),
      })));
    });
  }, []);

  console.warn(events);

  // Define event handlers as needed

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={[
        {
          id: 1,
          title: 'Test Event',
          start: '2024-02-01T10:00:00',
          end: '2024-02-01T12:00:00',
        },
      ]}
      // Add other props and event handlers as needed
    />
  );
}

export default Calendar;
