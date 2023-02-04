import React from 'react';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} contact={{ id, name, number }} />
      ))}
    </List>
  );
};

export default ContactList;
