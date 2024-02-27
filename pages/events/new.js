import Head from 'next/head';
import EventForm from '../../components/form/EventForm';
import { useAuth } from '../../utils/context/authContext';

const NewOrder = () => {
  const { user } = useAuth();
  return (
    <div>
      <Head>
        <title>New Event</title>
      </Head>
      <EventForm user={user} />
    </div>
  );
};

export default NewOrder;
