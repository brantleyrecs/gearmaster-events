import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createEvent, updateEvent } from '../../utils/data/eventData';
import { getType } from '../../utils/data/typeData';

const initialState = {
  id: 0,
  name: '',
  date: '',
  time: '',
  location: '',
  userId: '',
  typeId: 0,
};

const EventForm = ({ eventObj }) => {
  const { user } = useAuth();
  const router = useRouter();
  const { date } = router.query;
  const [currentEvent, setCurrentEvent] = useState(initialState);
  const [dbType, setDbType] = useState([]);

  useEffect(() => {
    getType().then(setDbType);

    if (eventObj.id) {
      setCurrentEvent({
        id: eventObj.id,
        name: eventObj.name,
        date: eventObj.date,
        time: eventObj.time,
        location: eventObj.location,
        typeId: eventObj.type.id,
        userId: user.id,
      });
    }
  }, [eventObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentEvent((prevState) => ({
      ...prevState,
      [name]: name === 'type' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventObj.id) {
      const payload = {
        id: currentEvent.id,
        name: currentEvent.name,
        date: currentEvent.date,
        time: currentEvent.time,
        location: currentEvent.location,
        typeId: currentEvent.typeId,
        userId: user.id,
      };
      updateEvent(currentEvent.id, payload)
        .then(() => router.push(`/events/${currentEvent.id}`));
    } else if (!eventObj.id && date) {
      const payload = { ...currentEvent, userId: user.id, date };
      createEvent(payload)
        .then((createdEvent) => router.push(`/events/${createdEvent.id}`));
    } else {
      const payload = { ...currentEvent, userId: user.id };
      createEvent(payload)
        .then((createdEvent) => router.push(`/events/${createdEvent.id}`));
    }
  };

  return (
    <>
      <div className="cards">

        <h2 className="formTitle" style={{ fontFamily: 'cursive', fontSize: '75px' }}>{eventObj.id ? 'Update' : 'Create'} Event</h2>
        <div className="formCard" style={{ marginTop: '25px' }}>
          <div className="bg">

            <Form onSubmit={handleSubmit}>

              {/* Event Name */}
              <input type="text" name="name" className="input" placeholder="Event Name" required value={currentEvent.name} onChange={handleChange} />

              {/* Location */}
              <input type="text" name="location" className="input" placeholder="Event Location" required value={currentEvent.location} onChange={handleChange} />

              {/* Date */}
              <input type="date" name="date" className="input" placeholder="Event Date" required value={currentEvent.date ? currentEvent.date : date} onChange={handleChange} />

              {/* Time */}
              <input type="time" name="time" className="input" placeholder="Event Time" required value={currentEvent.time} onChange={handleChange} />

              {/* Type */}
              <select className="input" type="text" name="typeId" placeholder="Event Type" value={currentEvent.typeId} onChange={handleChange}>
                <option value="" placeholder="Event Type">Select Type</option>
                <hr />
                {
                    dbType.map((objType) => (
                      <option
                        key={objType.id}
                        value={Number(objType.id)}
                      >
                        {objType.name}
                      </option>
                    ))
                  }
              </select>
              <button type="submit" className="btn" style={{ marginTop: '20px' }}>{eventObj.id ? 'Update' : 'Create'}</button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

EventForm.propTypes = {
  eventObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    location: PropTypes.string,
    type: PropTypes.number,
  }),
};

EventForm.defaultProps = {
  eventObj: initialState,
};

export default EventForm;
