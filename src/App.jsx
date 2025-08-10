import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

const initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts => 
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <div className="main-content">
        <div className="left-section">
          <SearchBox value={filter} onFilter={setFilter} />
          <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        </div>
        <div className="right-section">
          <ContactForm onAdd={addContact} />
        </div>
      </div>
    </div>
  );
}

export default App;