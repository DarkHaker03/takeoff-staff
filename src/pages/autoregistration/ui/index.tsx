import { FC } from 'react';
import styles from './styles.module.scss';

const AutoRegistration: FC = () => {
  console.log('delete this console.log');
  return (
    <div className={styles.page}>
      <h2>AutoRegistration</h2>
      <input type="text" className={styles.input} />
      <input type="text" className={styles.input} />
    </div>
  );
};

export default AutoRegistration;
