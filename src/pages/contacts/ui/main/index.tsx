import { FC } from 'react';
import { ContactsModel } from 'pages/contacts';
import { observer } from 'mobx-react-lite';
import Add from 'shared/components/add';
import ZeroList from '../zeroList';
import styles from './styles.module.scss';
import ContactsList from '../contactsList';
import PopupAddContact from '../popupAddContact';

const Main: FC = observer(() => {
  console.log(3);
  return (
    <main className={styles.main}>
      {
        ContactsModel.Users.length === 0
          ? <ZeroList />
          : <ContactsList />
      }
      <Add onClick={() => ContactsModel.PopupAddContact.toggle()} />
      {ContactsModel.PopupAddContact.state && <PopupAddContact />}
    </main>
  );
});

export default Main;
