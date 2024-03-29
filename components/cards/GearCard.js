import PropTypes from 'prop-types';
import React from 'react';
import { removeGear } from '../../utils/data/eventData';

export default function GearCard({ obj, onUpdate }) {
  const removeThisItem = () => {
    removeGear(obj.id).then(onUpdate);
  };

  return (
    <>
      <table className="table">
        <tbody>
          <tr className="tr">
            <td className="td">{obj.name}</td>
            <td className="td">{obj.info}</td>
            <td className="td"><button type="button" className="btn" onClick={removeThisItem}>Remove</button></td>
          </tr>
        </tbody>
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
  onUpdate: PropTypes.func.isRequired,
};
