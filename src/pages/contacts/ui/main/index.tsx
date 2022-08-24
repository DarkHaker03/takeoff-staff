import { FC } from 'react';
import { ContactsModel } from 'pages/contacts';
import { observer } from 'mobx-react-lite';
import Add from 'shared/ui/add';
import ZeroList from '../zeroList';
import styles from './styles.module.scss';
import ContactsList from '../contactsList';
import PopupContact from '../popupContact';

const Main: FC = observer(() => {
  const handleClick = () => {
    const { changeMode, toggle } = ContactsModel.Popup;
    changeMode('add');
    toggle();
  };
  return (
    <main className={styles.main}>
      {
        ContactsModel.Contacts.length === 0
          ? <ZeroList />
          : <ContactsList />
      }
      <Add onClick={handleClick} />
      {ContactsModel.Popup.state && <PopupContact />}
    </main>
  );
});

export default Main;
