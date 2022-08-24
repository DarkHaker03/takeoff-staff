import { FC } from 'react';
import { ContactsModel } from 'pages/contacts';
import { observer } from 'mobx-react-lite';
import styles from './styles.module.scss';

const ContactsList: FC = observer(() => {
  const handleClick = (id: number) => {
    const { changeMode, toggle } = ContactsModel.Popup;
    const { setSelectemItemId } = ContactsModel.Contacts;
    changeMode('redactAndDelete');
    toggle();
    setSelectemItemId(id);
  };
  return (
    <div>
      {ContactsModel.Contacts.filter.map((contact) => (
        <div className={styles.item} onClick={() => handleClick(contact.id)} key={contact.id}>
          <div className={styles.name}>{contact.name}</div>
          <div className={styles.number}>{contact.number}</div>
        </div>
      ))}
    </div>
  );
});

export default ContactsList;
