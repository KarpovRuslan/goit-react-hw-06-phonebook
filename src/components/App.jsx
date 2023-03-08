import ContactForm from './ContactForm/';
import ContactList from './ContactList/';
import Filter from './Filter';

export const App = () => {
  // const changeFilter = elm => {
  //   setFilter(elm.currentTarget.value.toLowerCase());
  // };

  // const getFiltredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter)
  //   );
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
