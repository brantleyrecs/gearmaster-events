import React, { useEffect, useState, useRef } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getGear } from '../../utils/data/gearData';
import { addGear } from '../../utils/data/eventData';

const initialState = {
  gear: 0,
  event: 0,
};

// eslint-disable-next-line react/prop-types
function GearInventory({ eventId }) {
  const [formInput, setFormInput] = useState(initialState);
  const [modalShow, setModalShow] = React.useState(false);
  const [gearList, setGearList] = useState([]);
  const mountedRef = useRef(true);

  const handleShow = () => {
    setModalShow(true);
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const allGear = () => {
    getGear().then((g) => {
      if (mountedRef.current) {
        setGearList(g);
      }
    });
  };

  useEffect(() => {
    allGear();
    setFormInput((prevState) => ({
      ...prevState,
      gear: gearList.id,
      event: eventId,
    }));

    return () => {
      mountedRef.current = false;
    };
  }, [eventId, gearList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = formInput;
    addGear(eventId, payload).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <button className="btn" onClick={handleShow} type="button">Add Gear</button>
      <Modal
        show={modalShow}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order Menu
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingSelect">
            <Form.Select
              aria-label="Name"
              name="gear"
              onChange={handleChange}
              value={formInput.name}
              className="mb-3"
            >
              <option value="">Select an Item</option>
              {
              gearList.map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                >
                  {item.name}
                </option>
              ))
            }
            </Form.Select>
          </FloatingLabel>
          <Button className="btn" variant="black" onClick={handleSubmit}>Add</Button>
        </Modal.Body>
        <Modal.Footer>
          {/* eslint-disable-next-line react/destructuring-assignment, react/prop-types */}
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GearInventory;
