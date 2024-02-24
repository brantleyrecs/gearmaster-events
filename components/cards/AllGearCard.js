import PropTypes from 'prop-types';
import React from 'react';

export default function AllGearCard({ obj }) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{obj.name}</td>
            <td>{obj.info}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

AllGearCard.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    info: PropTypes.string,
  }).isRequired,
};
