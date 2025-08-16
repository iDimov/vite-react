import { useSelector } from 'react-redux';
import Contact from './Contact';

const selectVisibleContacts = (state) => {
  const contacts = state.contacts.items;
  const filter = state.filters.name.toLowerCase();
  
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const allContacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const getHeaderText = () => {
    if (filter) {
      return `Search Results (${visibleContacts.length})`;
    }
    return 'Your Contacts';
  };

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