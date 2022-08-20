import { FC } from 'react';
import useInput from 'shared/hooks/useInput';
import styles from './styles.module.scss';

const AutoRegistration: FC = () => {
  const [name, setName] = useInput();

  return (
    <div className={styles.page}>
      <h2>AutoRegistration</h2>
      <input type="text" value={name} onChange={setName} className={styles.input} />
      <input type="text" className={styles.input} />
    </div>
  );
};

export default AutoRegistration;
