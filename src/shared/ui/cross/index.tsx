import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  onClick: () => void,
}

const Cross: FC<Props> = ({ onClick }) => (
  <div className={styles.cross} onClick={onClick} />
);

export default Cross;
