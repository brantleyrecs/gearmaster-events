import { useRouter } from 'next/router';
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

  return <GearForm gearObj={gear} />;
}
