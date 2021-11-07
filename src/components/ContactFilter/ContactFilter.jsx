import React from 'react'

const ContactFilter = ({ filter, handleFilterName }) => {
  return (
    <div className="mb-3">
          <label htmlFor="filter" className="form-label">Find contacts by name</label>
          <input
            className="form-control"
          id="filter"
          type="text"
          name="filter-name"
          value={ filter }
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={ handleFilterName }
        />
    </div>
  )
}

export default ContactFilter;
