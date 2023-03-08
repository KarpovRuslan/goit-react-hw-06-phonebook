import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="find" className={css.Filter}>
        Find contacts by <span className={css.Filter__text}>name</span>
      </label>
      <input
        type="text"
        className={css.Filter__input}
        onChange={e => dispatch(filterContact(e.target.value.toLowerCase()))}
      />
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};
