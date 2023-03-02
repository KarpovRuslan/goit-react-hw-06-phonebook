import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <>
      <label htmlFor="find" className={css.Filter}>
        Find contacts by <span className={css.Filter__text}>name</span>
      </label>
      <input
        type="text"
        value={value}
        className={css.Filter__input}
        onChange={onChange}
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  onChange: PropTypes.func.isRequired,
};
