import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.ContactList}>
      <p className={css.ContactList_find}>Total contacts: {contacts.length}</p>
      {contacts?.map(elm => (
        <li key={elm.id} className={css.ContactList__item}>
          <p className={css.ContactList__text}>
            {elm.name}: {elm.number}
          </p>
          <button
            className={css.ContactList__btn}
            onClick={() => onDeleteContact(elm.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
