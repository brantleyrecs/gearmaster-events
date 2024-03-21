import React from 'react';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <>
      <Head>
        <title>GearMaster Events</title>
      </Head>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          margin: '0 auto',
          zIndex: 1,
          minHeight: '25rem',
          width: '100%',
          minWidth: '30rem',
          paddingBlock: '0 5rem',
        }}
      >
        <h1>Welcome To GearMaster-Events</h1>
        <div>
          <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
            Sign In
          </Button>
        </div>
      </div>
    </>
  );
}

export default Signin;
