import { FC } from 'react';
import { useNavigate } from 'react-router';
import useInput from 'shared/hooks/useInput';
import { AutoregistrationModel } from '..';
import styles from './styles.module.scss';

const AutoRegistration: FC = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useInput();
  const [password, setPassword] = useInput();
  const handleClick = () => {
    const confirm = AutoregistrationModel.AutoRegistration.confirm(login, password);
    if (confirm) {
      navigate('/contacts');
      return;
    }
    alert('incorrect passwords or login');
  };
  return (
    <div className={styles.page}>
      <h2>AutoRegistration</h2>
      <input value={login} onChange={setLogin} className={styles.input} />
      <input value={password} onChange={setPassword} className={styles.input} />
      <button type="submit" onClick={handleClick}>sign in</button>
    </div>
  );
};

export default AutoRegistration;
