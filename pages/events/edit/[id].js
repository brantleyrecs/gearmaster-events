import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleEvent } from '../../../utils/data/eventData';
import EventForm from '../../../components/form/EventForm';

export default function EditEvent() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState({});

  useEffect(() => {
    getSingleEvent(id).then(setEvent);
  }, [id]);

  return <EventForm eventObj={event} />;
}
