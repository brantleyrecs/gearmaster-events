import PropTypes from 'prop-types';
import React from 'react';
import { removeGear } from '../../utils/data/eventData';

export default function GearCard({ obj }) {
  const removeThisItem = () => {
    removeGear(obj.id).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <table>
        <tr>
          <th>Gear Name</th>
          <th>Gear Info</th>
          <th>Remove</th>
        </tr>
        <tr>
          <td>{obj.name}</td>
          <td>{obj.info}</td>
          <td><button type="button" className="btn" onClick={removeThisItem}>Remove</button></td>
        </tr>
      </table>
    </>
  );
}

GearCard.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    info: PropTypes.string,
  }).isRequired,
};