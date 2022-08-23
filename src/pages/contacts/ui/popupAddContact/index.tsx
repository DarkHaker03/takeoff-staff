import { observer } from 'mobx-react-lite';
import { ContactsModel } from 'pages/contacts';
import { FC } from 'react';
import img from 'shared/assets/img/arrowLeft.svg';
import styles from './styles.module.scss';

const PopupAddContact: FC = observer(() => {
  console.log(3);
  return (
    <div className={styles.popup}>
      <div className={styles.header}>
        <div style={{ cursor: 'pointer' }} onClick={() => ContactsModel.PopupAddContact.toggle()}>
          <img src={img} alt="img" className={styles.img} />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.block}>
          <div>Name</div>
          <input type="text" />
        </div>
        <div className={styles.block}>
          <div>Number</div>
          <input type="text" />
        </div>
        <button type="button" className={styles.add}>
          Add
        </button>
      </div>
    </div>
  );
});

export default PopupAddContact;
