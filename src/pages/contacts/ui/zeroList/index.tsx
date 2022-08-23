import { FC } from 'react';
import imgBox from 'shared/assets/img/box.svg';
import styles from './styles.module.scss';

const ZeroList: FC = () => (
  <div className={styles.container}>
    <img src={imgBox} alt="" className={styles.img} />
    <div className={styles.text}>
      You have no contacts yet
    </div>
  </div>
);

export default ZeroList;
