import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUserInfo } from '../redux/auth/authOperation';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    const user = { name, email, password };

    dispatch(postUserInfo(user));

    setName('');
    setEmail('');
    setpassword('');
  };

  return (
    <>
      <h2 className="title-logandreg">Зарегистрироватся </h2>
      <form onSubmit={handleSubmit} className="display-column">
        <label className="label">
          Name
          <input onChange={evt => setName(evt.target.value)} value={name} />
        </label>

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
        <button type="submit">Зарегистрироватся</button>
      </form>
    </>
  );
};

export default Register;
