import PropTypes from 'prop-types';
import Link from 'next/link';
import React from 'react';

export default function AllGearCard({ obj }) {
  return (
    <>
      <table className="table">
        <tbody>
          <tr className="tr">
            <td className="td">{obj.name}</td>
            <td className="td">{obj.info}</td>
            <td className="td">
              <Link href={`/gear/edit/${obj.id}`} passHref>
                <button type="button" className="btn">Edit</button>
              </Link>
            </td>
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
