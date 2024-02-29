import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import { setFilterValue } from '../redux/filterSlice';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = (filter) => {
    dispatch(setFilterValue(filter));
  };

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilterChange} />
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
