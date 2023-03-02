import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export default function ContactForm({ handleSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleInputChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else if (evt.target.name === 'number') {
      setNumber(evt.target.value);
    }
  };

  return (
    <>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          handleSubmit(name, number);
          setName('');
          setNumber('');
        }}
        className={css.ContactForm}
      >
        <label htmlFor="nameInputId" className={css.ContactForm__name}>
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          id={nameInputId}
          className={css.ContactForm__input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="numberInputId" className={css.ContactForm__name}>
          Number
        </label>
        <input
          type="tel"
          value={number}
          onChange={handleInputChange}
          name="number"
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={css.ContactForm__btn}>
          Add contact
        </button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
