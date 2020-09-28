import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/auth/authOperation';
import './contacts.css';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const user = { email, password };

    dispatch(loginUser(user));

    setEmail('');
    setpassword('');
  };
  return (
    <>
      <h2 className="title-logandreg">Войти </h2>
      <form onSubmit={handleSubmit} className="display-column">
        <label className="label">
          Email
          <input onChange={evt => setEmail(evt.target.value)} value={email} />
        </label>

        <label className="label">
          Password
          <input
            onChange={evt => setpassword(evt.target.value)}
            value={password}
          />
        </label>
        <button type="submit">Войти</button>
      </form>
    </>
  );
};

export default Login;
