import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (query.trim() === '') {
      toast.error('Please enter a search term!');
      return;
    }

    onSubmit(query.trim());
    setQuery('');
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.button} type="submit">
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <span className={styles.buttonText}>Search</span>
        </button>
      </form>
    </header>
  );
};

export default SearchBar;