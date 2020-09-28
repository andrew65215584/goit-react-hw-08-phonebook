import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/navigation.css';

function LogAndRegister() {
  return (
    <ul className="nav-list log-list">
      <li className="nav-link">
        <NavLink to="/login" className="nav-link-item">
          Войти
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/register" className="nav-link-item">
          Зарегистрироватся
        </NavLink>
      </li>
    </ul>
  );
}

export default LogAndRegister;
