import { FC } from 'react';
import useInput from 'shared/hooks/useInput';
import styles from './styles.module.scss';

const AutoRegistration: FC = () => {
  const [login, setLogin] = useInput();
  const [password, setPassword] = useInput();
  return (
    <div className={styles.page}>
      <h2>AutoRegistration</h2>
      <input value={password} onChange={setPassword} className={styles.input} />
      <input value={login} onChange={setLogin} className={styles.input} />
      <button type="submit">sign in</button>
    </div>
  );
};

export default AutoRegistration;
