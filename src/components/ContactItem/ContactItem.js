import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Item, ContactInfo, NameBox, Button } from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item key={id}>
      <ContactInfo>
        <NameBox>{name}</NameBox> : {number}
      </ContactInfo>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
};

export default ContactItem;
