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
      <Form onSubmit={handleSubmit}>
        <input type="input" name="name" className="form__field" placeholder="Name" required onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <label htmlFor="name" className="form__label" style={{ marginTop: '50px' }}>Name</label>
        <button type="submit" className="btn">Button</button>
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
