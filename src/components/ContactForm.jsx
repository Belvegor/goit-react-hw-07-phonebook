import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !phone) {
      alert('Please provide both name and phone number.');
      return;
    }

    const newContact = {
      name,
      phone,
    };

    dispatch(addContact(newContact));

    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;