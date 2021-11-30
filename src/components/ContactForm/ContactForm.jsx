import React from 'react';

const ContactForm = (props) => {
  const { handleNameInput, handleNumberInput, addContact, name, number } = props;
  return (
    <form onSubmit={addContact}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          className="form-control"
          id="name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleNameInput}
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">Number</label>
        <input
          className="form-control"
          id="number"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleNumberInput}
        />
      </div>    
      <input type="submit" value="Add contact" className="btn btn-primary" />
    </form>
  );
}

export default ContactForm;