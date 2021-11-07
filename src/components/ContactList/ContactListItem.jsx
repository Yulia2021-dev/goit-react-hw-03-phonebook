import React from 'react'

function ContactListItem({ contact, removeContact }) {
  return (
    <li className="list-group-item">
      <p>{contact.name} : {contact.number}</p>
      <button className="btn btn-danger btn-sm" onClick={() => removeContact(contact.id)}>Delete</button>
    </li>
  )
}

export default ContactListItem;