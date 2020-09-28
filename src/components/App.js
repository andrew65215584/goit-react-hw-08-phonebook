import React, { Suspense, useEffect, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
// import Contacts from '../view/contacts';
// import Home from '../view/home';
// import Register from '../view/register';
// import Login from '../view/login';
import Header from './Header/Header';

import { getCurrentUser } from '../redux/auth/authOperation';
import { connect } from 'react-redux';

const Home = lazy(() => import('../view/home'));
const Contacts = lazy(() => import('../view/contacts'));
const Login = lazy(() => import('../view/login'));
const Register = lazy(() => import('../view/register'));

function App({ getCurrentUser, isAuthenticated }) {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <>
      <Header />
      <Suspense fallback={<h3>Загружаем...</h3>}>
        <Switch>
          <Route path="/home" component={Home} />

          <PrivateRoute path="/contacts" component={Contacts} />

          <PublicRoute restricted path="/login" component={Login} />
          <PublicRoute restricted path="/register" component={Register} />
        </Switch>
      </Suspense>
    </>
  );
}

export default connect(null, { getCurrentUser })(App);
