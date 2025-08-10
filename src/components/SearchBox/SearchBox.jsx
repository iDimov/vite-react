import styles from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;