import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/';
import ContactList from './ContactList/';
import Filter from './Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState([]);

  const handleSubmit = (name, number) => {
    if (!contacts.find(el => el.name === name)) {
      setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const changeFilter = elm => {
    setFilter(elm.currentTarget.value.toLowerCase());
  };

  const getFiltredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const deleteContact = ContactId => {
    setContacts(prevState => prevState.filter(elm => elm.id !== ContactId));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getFiltredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
