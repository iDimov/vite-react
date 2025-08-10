import { FidgetSpinner } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass={styles.spinner}
        ballColors={['#667eea', '#764ba2', '#4CAF50']}
        backgroundColor="#F4442E"
      />
      <p className={styles.text}>Loading images...</p>
    </div>
  );
};

export default Loader;