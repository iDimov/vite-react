import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className="contact-card">
      <div className="contact-info">
        <span className="contact-name">
          <span className="contact-icon">👤</span>
          {contact.name}
        </span>
        <span className="contact-separator">•</span>
        <span className="contact-number">
          <span className="contact-icon">📞</span>
          {contact.number}
        </span>
      </div>
      <button onClick={handleDelete} className="delete-btn">
        Delete
      </button>
    </div>
  );
}