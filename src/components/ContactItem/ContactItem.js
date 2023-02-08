import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import css from './ContactItem.module.css';
import { useState } from 'react';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contact__item} key={id}>
      <p className={css.contact__description}>
        <span className={css.contact__name}>{name}</span> : {number}
      </p>
      <button
        className={css.contact__deletebtn}
        type="button"
        disabled={isDeleting}
        onClick={handleDelete}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactItem;
