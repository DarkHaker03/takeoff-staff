import { FC } from 'react';
import img from 'shared/assets/img/search.svg';
import imgBox from 'shared/assets/img/box.svg';
import styles from './styles.module.scss';

const Contacts: FC = () => {
  console.log(3);
  return (
    <>
      <header className={styles.header}>
        <span> Contacts </span>
        <img src={img} alt="" />
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <img src={imgBox} alt="" className={styles.img} />
          <div className={styles.text}>
            You have no contacts yet
          </div>
        </div>
      </main>
    </>
  );
};

export default Contacts;
