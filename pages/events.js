import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getEvents } from '../utils/data/eventData';
import EventCards from '../components/cards/EventCards';

export default function Events() {
  const [events, setEvents] = useState([]);

  const showEvents = () => {
    getEvents().then((data) => setEvents(data));
  };

  useEffect(() => {
    showEvents();
  }, []);

  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <h1 style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '75px' }}>Events</h1>
      <div style={{
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',
      }}
      >
        {events.map((event) => (
          <div key={`event--${event.id}`} className="event">
            <EventCards
              obj={event}
            />
          </div>
        ))}
      </div>
    </>
  );
}
