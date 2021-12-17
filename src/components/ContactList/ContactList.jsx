import React from "react";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className="list-group list-group-flush">
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          removeContact={removeContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
