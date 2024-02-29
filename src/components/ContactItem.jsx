import styles from './form.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={styles.button} >
    {contact.name} - {contact.number}
    <button onClick={() => {
      console.log("Deleting contact with id:", contact.id);
      onDeleteContact(contact.id);
    }}>Delete</button>
  </li>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};


export default ContactItem;