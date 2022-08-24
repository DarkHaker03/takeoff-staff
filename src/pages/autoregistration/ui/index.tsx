import { observer } from 'mobx-react-lite';
import { FC, useState } from 'react';
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
  const [isHelp, setIsHelp] = useState<boolean>(false);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>AutoRegistration</h2>
        <input value={login} onChange={setLogin} className={styles.input} placeholder="login" />
        <input value={password} onChange={setPassword} className={styles.input} placeholder="password" />
        <button className="btn" type="button" onClick={handleClick}>sign in</button>
        <button className="btn" type="button" onClick={() => setIsHelp(!isHelp)}>Help</button>
        {isHelp && (
          <div className={styles.help}>
            <div>login: 1</div>
            <div>password: 1</div>
            <div>login: chernov</div>
            <div>password: 12</div>
          </div>
        )}
      </div>
    </div>
  );
});

export default AutoRegistration;
