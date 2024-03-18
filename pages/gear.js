import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { getGear } from '../utils/data/gearData';
import AllGearCard from '../components/cards/AllGearCard';

export default function ViewEvents() {
  const [gear, setGear] = useState([]);

  useEffect(() => {
    getGear().then(setGear);
  }, []);

  return (
    <>
      <Head>
        <title>Gear</title>
      </Head>
      <h1 style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '75px' }}>Gear</h1>
      <Link passHref href="./gear/new">
        <button type="button" className="btn">New Gear</button>
      </Link>
      <table style={{ marginTop: '20px' }} className="table">
        <thead>
          <tr className="tr">
            <th className="th">Gear Name</th>
            <th className="th">Gear Info</th>
            <th className="th">Edit Gear</th>
          </tr>
        </thead>
      </table>
      <div style={{
        display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center',
      }}
      >
        {gear?.map((item) => (
          <div key={`item--${item.id}`} className="item">
            <AllGearCard
              obj={item}
            />
          </div>
        ))}
      </div>
    </>
  );
}
