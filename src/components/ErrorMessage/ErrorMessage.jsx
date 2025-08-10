import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>⚠️</div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default ErrorMessage;