import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup() {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  const [inputFocus, setInputFocus] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: { ...formState },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1-9">
      <Link to="/login" className="back-link">← Go to Login</Link>

      <h2 className="login-title">Signup</h2>
      <form className="signup-form" onSubmit={handleFormSubmit}>
        {formError && <p className="error-message">{formError}</p>}
        <div className="form-group-z">
          <label htmlFor="username" className="label-z">Username:</label>
          <input
            className={`input-z ${inputFocus ? 'focused' : ''}`}
            placeholder="username"
            name="username"
            type="text"
            id="username"
            onChange={handleChange}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
        </div>
        <div className="form-group-z">
          <label htmlFor="email" className="label-z">Email:</label>
          <input
            className={`input-z ${inputFocus ? 'focused' : ''}`}
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
        </div>
        <div className="form-group-z">
          <label htmlFor="password" className="label-z">Password:</label>
          <input
            className={`input-z ${inputFocus ? 'focused' : ''}`}
            placeholder="******"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
        </div>
        <div className="button-container-z">
          <button type="submit" className="submit-button-z">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;