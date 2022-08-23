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
        <div onClick={() => ContactsModel.PopupAddContact.toggle()}>
          <img src={img} alt="img" className={styles.img} />
          <span>
            Add
          </span>
        </div>
      </div>
      <div className={styles.main}>
        <div>
          <div>Name</div>
          <input type="text" />
        </div>
        <div>
          <div>Number</div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
});

export default PopupAddContact;
