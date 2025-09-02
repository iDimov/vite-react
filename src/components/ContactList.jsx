import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectContacts, selectLoading, selectError } from '../redux/contactsSlice';
import { selectNameFilter } from '../redux/filtersSlice';
import Contact from './Contact';

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const getHeaderText = () => {
    if (filter) {
      return `Search Results (${visibleContacts.length})`;
    }
    return 'Your Contacts';
  };

  if (loading) {
    return <div>Loading contacts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (visibleContacts.length === 0) {
    return (
      <>
        <div className="contacts-header">
          <h3>{getHeaderText()}</h3>
          {allContacts.length > 0 && (
            <span className="contacts-count">
              {allContacts.length} total
            </span>
          )}
        </div>
        <div className="empty-state">
          {filter 
            ? `No contacts found matching "${filter}"`
            : "No contacts yet. Add your first contact!"
          }
        </div>
      </>
    );
  }

  return (
    <>
      <div className="contacts-header">
        <h3>{getHeaderText()}</h3>
        <span className="contacts-count">
          {visibleContacts.length} {visibleContacts.length === 1 ? 'contact' : 'contacts'}
        </span>
      </div>
      <ul>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}