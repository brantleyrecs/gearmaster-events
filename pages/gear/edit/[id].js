import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getSingleGear } from '../../../utils/data/gearData';
import GearForm from '../../../components/form/GearForm';

export default function EditGear() {
  const router = useRouter();
  const { id } = router.query;
  const [gear, setGear] = useState({});

  useEffect(() => {
    getSingleGear(id).then(setGear);
  }, [id]);

  return (
    <>
      <Head>
        <title>Edit Gear</title>
      </Head>
      <GearForm gearObj={gear} />
    </>
  );
}
