/* eslint-disable import/no-extraneous-dependencies */
// import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';
import Calendar from '../components/Calendar';

function Home() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div
        // className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          margin: '0 auto',
        }}
      >
        <h1 style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '75px' }}>Hello {user.name}! </h1>
        <br />
        <Calendar />
      </div>
    </>
  );
}

export default Home;
