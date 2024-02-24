import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function EventCards({ obj }) {
  function formatDate(rawDate) {
    const dateObject = new Date(rawDate);
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    return `${month}-${day}-${year}`;
  }

  function convertTo12HourFormat(time24) {
    // Parse the time string to get hours and minutes
    const [hours, minutes] = time24.split(':').map(Number);
    // Determine AM or PM
    const period = hours < 12 ? 'AM' : 'PM';
    // Convert hours to 12-hour format
    const hours12 = hours % 12 || 12;
    // Format minutes with leading zero if necessary
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
    // Construct the 12-hour formatted time string
    const time12 = `${hours12}:${minutesFormatted} ${period}`;

    return time12;
  }

  return (
    <Link href={`/events/${obj.id}`} passHref>
      <div className="eventCard" style={{ cursor: 'pointer', margin: '20px' }}>
        <div style={{ paddingTop: '50px', textAlign: 'center' }}>
          <h3>{obj.name}</h3>
          <h6>{formatDate(obj.date)}</h6>
          <h6>{convertTo12HourFormat(obj.time)}</h6>
        </div>
      </div>
    </Link>
  );
}

EventCards.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
};
