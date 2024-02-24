import Head from 'next/head';
import GearForm from '../../components/form/GearForm';

const NewGear = () => (
  <div>
    <Head>
      <title>New Gear</title>
    </Head>
    <h2>Create New Gear</h2>
    <GearForm />
  </div>
);

export default NewGear;
