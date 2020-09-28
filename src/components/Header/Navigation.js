import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './navigation.css';
const Navigation = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-link">
          <NavLink to="/home" className="nav-link-item">
            Главная
          </NavLink>
        </li>
        {token && (
          <li className="nav-link">
            <NavLink to="/contacts" className="nav-link-item">
              Контакты
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.token,
// });

export default Navigation;
