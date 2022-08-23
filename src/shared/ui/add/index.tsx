import { FC } from 'react';
import Plus from '../plus';
import styles from './styles.module.scss';

type Props = {
  onClick: () => void,

}

const Add: FC<Props> = ({ onClick }) => (
  <div className={styles.add} onClick={onClick}>
    <Plus />
  </div>
);

export default Add;
