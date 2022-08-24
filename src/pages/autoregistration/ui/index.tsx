import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import useInput from 'shared/hooks/useInput';
import { AutoregistrationModel } from '..';
import styles from './styles.module.scss';

const AutoRegistration: FC = observer(() => {
  const navigate = useNavigate();
  const [login, setLogin] = useInput();
  const [password, setPassword] = useInput();
  const handleClick = () => {
    AutoregistrationModel.AutoRegistration.setConfirm(login, password);
    if (AutoregistrationModel.AutoRegistration.confirm) {
      navigate('/contacts');
      return;
    }
    alert('incorrect passwords or login');
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>AutoRegistration</h2>
        <input value={login} onChange={setLogin} className={styles.input} placeholder="login" />
        <input value={password} onChange={setPassword} className={styles.input} placeholder="password" />
        <button className="btn" type="submit" onClick={handleClick}>sign in</button>
      </div>
    </div>
  );
});

export default AutoRegistration;
