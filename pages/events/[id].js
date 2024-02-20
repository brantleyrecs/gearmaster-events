import React, { useEffect, useState } from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { getSingleEvent, deleteEvent } from '../../utils/data/eventData';
import GearCard from '../../components/cards/GearCard';
import GearInventory from '../../components/cards/GearInventory';

export default function ViewEvents() {
  const [eventDetails, setEventDetails] = useState({});
  const [modalShow, setModalShow] = React.useState(false);
  const [gear, setGear] = useState([]);
  const router = useRouter();
  const { id } = router.query ?? {};

  setTimeout(() => {
    setGear(eventDetails.gear);
  }, 1);

  const deleteThisEvent = () => {
    if (window.confirm('Delete event?')) {
      deleteEvent(id).then(() => {
        router.push('/events');
      });
    }
  };

  useEffect(() => {
    getSingleEvent(id).then(setEventDetails);
  }, [id]);

  return (
    <>
      <Head>
        <title>{eventDetails?.name}</title>
      </Head>
      <h1>{eventDetails.name}</h1>
      <h5>{eventDetails.location}</h5>
      <h6>{eventDetails.date}</h6>
      <h6>{eventDetails.time}</h6>
      <h6>{eventDetails.type?.name}</h6>
      <button className="btn" onClick={deleteThisEvent} type="button">Delete</button>

      <GearInventory eventId={eventDetails.id} show={modalShow} onHide={() => setModalShow(false)} />

      <div style={{
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin: '20px',
      }}
      >
        {gear?.map((item) => (
          <div key={`item--${item.id}`} className="item">
            <GearCard
              obj={item}
              eventDetails={eventDetails}
            />
          </div>
        ))}
      </div>
    </>
  );
}
