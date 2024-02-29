import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from '../redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.phone}
          <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
