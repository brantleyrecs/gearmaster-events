import PropTypes from 'prop-types';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, updateUser }) {
  const [formData, setFormData] = useState({
    name: '',
    uid: user.uid,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(() => updateUser(user.uid));
  };

  return (
    <>
      {/* <div className="form__group field" onSubmit={handleSubmit}>
        <input type="input" name="name" className="form__field" placeholder="Name" required onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <label htmlFor="name" className="form__label">Name</label>
        <button type="submit" className="btn">Button</button>
      </div> */}
      <Form onSubmit={handleSubmit}>
        <input type="input" name="name" className="form__field" placeholder="Name" required onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <label htmlFor="name" className="form__label" style={{ marginTop: '50px' }}>Name</label>
        <button type="submit" className="btn">Button</button>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control as="text" name="bio" required placeholder="Enter your Name" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
    </>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
