import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { createGear, updateGear } from '../../utils/data/gearData';

const initialState = {
  id: 0,
  name: '',
  info: '',
};

const GearForm = ({ gearObj }) => {
  const router = useRouter();
  const [currentGear, setCurrentGear] = useState(initialState);

  useEffect(() => {
    if (gearObj.id) {
      setCurrentGear({
        id: gearObj.id,
        name: gearObj.name,
        info: gearObj.info,
      });
    }
  }, [gearObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentGear((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gearObj.id) {
      const payload = {
        id: currentGear.id,
        name: currentGear.name,
        info: currentGear.info,
      };
      updateGear(currentGear.id, payload)
        .then(() => router.push('/'));
    } else {
      const payload = { ...currentGear };
      createGear(payload)
        .then(() => router.push('/'));
    }
  };

  return (
    <>
      <div className="formTitle">{gearObj.id ? 'Update' : 'Create'}</div>
      <div className="formCard" style={{ marginTop: '25px' }}>
        <div className="bg">

          <Form onSubmit={handleSubmit}>

            {/* Gear Name */}
            <input type="text" name="name" className="input" placeholder="Gear Name" required value={currentGear.name} onChange={handleChange} />

            {/* Info */}
            <textarea type="text" name="info" className="input" placeholder="Gear Info" required value={currentGear.location} onChange={handleChange} />

            <button type="submit" className="btn" style={{ marginTop: '20px' }}>{gearObj.id ? 'Update' : 'Create'}</button>
          </Form>
        </div>
        <div className="blob" />
      </div>
    </>
  );
};

GearForm.propTypes = {
  gearObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    info: PropTypes.string,
  }),
};

GearForm.defaultProps = {
  gearObj: initialState,
};

export default GearForm;
