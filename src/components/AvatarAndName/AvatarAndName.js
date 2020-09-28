import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Header/navigation.css';
import { logOut } from '../../redux/auth/authOperation';

function AvatarAndName() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);

  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div className="avatar-container">
      <span>Вы вошли как {name} </span>
      <button onClick={handleClick}>Выйти</button>
    </div>
  );
}

export default AvatarAndName;
