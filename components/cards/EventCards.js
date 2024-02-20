import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function EventCards({ obj }) {
  return (
    <Link href="/" passHref>
      <div className="eventCard" style={{ cursor: 'pointer', margin: '20px' }}>
        <div>{obj.name}</div>
        <div>{obj.date}</div>
        <div>{obj.time}</div>
      </div>
    </Link>
  );
}

EventCards.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
};
