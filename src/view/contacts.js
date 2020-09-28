import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Form from '../components/Form/Form';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Notification } from '../components/Notification/Notification';
import { setLocalData, setNotify } from '../redux/actions';

import { CSSTransition } from 'react-transition-group';
import { getDataFromDB } from '../redux/operations';
import './contacts.css';

function Contacts(props) {
  useEffect(() => {
    props.getDataFromDB();
  });

  return (
    <>
      <CSSTransition
        in={props.notify}
        timeout={2000}
        classNames="notify"
        unmountOnExit
        onEntered={() => props.setNotify(false)}
      >
        <Notification />
      </CSSTransition>
      <CSSTransition
        in={true}
        appear={true}
        timeout={2000}
        classNames="op"
        unmountOnExit
      >
        <h2 className="title">Phonebook</h2>
      </CSSTransition>
      <Form />
      <CSSTransition
        in={props.value.length >= 1}
        timeout={300}
        unmountOnExit
        classNames="title-contacts"
      >
        <h2 className="title-contacts">Contacts</h2>
      </CSSTransition>

      {props.isLoading && <h2> ..... loading</h2>}

      <CSSTransition
        in={props.value.length >= 2}
        timeout={300}
        unmountOnExit
        classNames="filter"
      >
        <Filter />
      </CSSTransition>
      <ContactList />
    </>
  );
}

const mapStateToProps = state => ({
  value: state.phonebook.contacts.items,
  filter: state.phonebook.contacts.filter,
  notify: state.phonebook.contacts.setNotify,
  isLoading: state.phonebook.isLoading,
});

const mapDispatchToProps = { setLocalData, setNotify, getDataFromDB };

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
