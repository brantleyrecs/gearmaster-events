/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { useAuth } from '../utils/context/authContext';
import { getEvents } from '../utils/data/eventData';

function Home() {
  const [events, setEvents] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  function renderEventContent() {
    return (
      <>
        <b>{events.name}</b>
        <i>{events.date}</i>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>Hello {user.name}! </h1>
        <FullCalendar
          className="calendar"
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          // eslint-disable-next-line react/jsx-no-bind
          eventContent={renderEventContent}
        />
      </div>
    </>
  );
}

export default Home;
