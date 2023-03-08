import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.ContactList}>
      <p className={css.ContactList_find}>
        Total contacts: {filteredContacts.length}
      </p>
      {filteredContacts.map(elm => (
        <li key={elm.id} className={css.ContactList__item}>
          <p className={css.ContactList__text}>
            {elm.name}: {elm.number}
          </p>
          <button
            className={css.ContactList__btn}
            onClick={() => dispatch(deleteContact(elm.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
};
