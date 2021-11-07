import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, filter, removeContact }) => {
  return (
    <ul className="list-group list-group-flush">
      {contacts.filter(i => i.name.toLowerCase().includes(filter.toLowerCase()))
        .map(contact => <ContactListItem key={contact.id } contact={contact} removeContact={ removeContact} />)}
    </ul>
  )
}

export default ContactList;