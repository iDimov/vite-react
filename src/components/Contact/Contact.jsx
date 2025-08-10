import styles from './Contact.module.css';

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.name}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          {name}
        </p>
        <p className={styles.number}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          {number}
        </p>
      </div>
      <button
        className={styles.button}
        onClick={() => onDelete(id)}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;