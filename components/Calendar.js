/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { getEvents } from '../utils/data/eventData';
// import EventForm from './form/EventForm';

function Calendar() {
  const [events, setEvents] = useState([]);
  // const [dateString, setDateString] = useState();
  const router = useRouter();

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

  const handleClick = (e) => {
    const eventId = Number(e.event._def?.publicId);
    router.push(`/events/${eventId}`);
  };

  const addClick = (e) => {
    // setDateString(e.dateStr);
    router.push(`/events/new?date=${e.dateStr}`);
    // console.warn(dateString);
    // return (
    //   <EventForm dateString={dateString} />
    // );
  };

  // console.warn(dateString);

  // Define event handlers as needed

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventClick={handleClick}
      dateClick={addClick}
      // Add other props and event handlers as needed
    />
  );
}

export default Calendar;
