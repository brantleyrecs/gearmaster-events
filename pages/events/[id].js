import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { getSingleEvent, deleteEvent } from '../../utils/data/eventData';
import GearCard from '../../components/cards/GearCard';
import GearInventory from '../../components/cards/GearInventory';

export default function ViewEvents() {
  const { user } = useAuth();
  const [eventDetails, setEventDetails] = useState({});
  const [modalShow, setModalShow] = React.useState(false);
  const [gear, setGear] = useState([]);
  const router = useRouter();
  const { id } = router.query ?? {};

  function formatDate(rawDate) {
    const [year, month, day] = rawDate.split('-');

    return `${month}/${day}/${year}`;
  }

  function convertTo12HourFormat(time24) {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours < 12 ? 'AM' : 'PM';
    const hours12 = hours % 12 || 12;
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
    const time12 = `${hours12}:${minutesFormatted} ${period}`;

    return time12;
  }

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

  const loadEvent = () => {
    getSingleEvent(id).then(setEventDetails);
  };

  // eslint-disable-next-line consistent-return
  function Buttons() {
    if (eventDetails.user?.id === user.id) {
      return (
        <>
          <Link href={`/events/edit/${eventDetails.id}`} passHref>
            <button className="btn" type="button">Edit</button>
          </Link>
          <button className="btn" onClick={deleteThisEvent} type="button">Delete</button>
        </>
      );
    } return <div />;
  }

  useEffect(() => {
    getSingleEvent(id).then(setEventDetails);
  }, [id]);

  return (
    <>
      <Head>
        <title>{eventDetails?.name}</title>
      </Head>
      <h1 className="eventTitle">{eventDetails.name}</h1>
      <div className="detailsCard">
        <h5>Location: {eventDetails.location}</h5>
        <h5>Date: {eventDetails.date ? formatDate(eventDetails.date) : ''}</h5>
        <h5>Time: {eventDetails.time ? convertTo12HourFormat(eventDetails.time) : ''}</h5>
        <h5>Type: {eventDetails.type?.name}</h5>
      </div>

      <Buttons />

      <GearInventory eventId={eventDetails.id} onUpdate={loadEvent} show={modalShow} onHide={() => setModalShow(false)} />

      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Gear Name</th>
            <th className="th">Gear Info</th>
            <th className="th">Remove</th>
          </tr>
        </thead>
      </table>
      <div
        style={{
          display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center',
        }}
        className="tableBorder"
      >
        {gear?.map((item) => (
          <div key={`item--${item.id}`} className="item">
            <GearCard
              obj={item}
              eventDetails={eventDetails}
              onUpdate={loadEvent}
            />
          </div>
        ))}
      </div>
    </>
  );
}
