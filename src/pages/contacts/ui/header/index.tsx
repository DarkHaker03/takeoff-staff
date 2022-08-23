import { FC } from 'react';
import img from 'shared/assets/img/search.svg';
import styles from './styles.module.scss';

const Header: FC = () => (
  <header className={styles.header}>
    <span> Contacts </span>
    <img src={img} alt="" />
  </header>
);

export default Header;
