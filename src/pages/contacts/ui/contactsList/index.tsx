import React, { FC, useCallback } from 'react';
import { ContactsModel } from 'pages/contacts';
import { ContactKeys } from 'shared/api/contacts';
import { observer } from 'mobx-react-lite';
import styles from './styles.module.scss';

type Props = {
  handleClick: any,
  contact: ContactKeys,
}

const Item = React.memo(({ handleClick, contact: { id, name, number } }: Props) => (
  <div className={styles.item} onClick={() => handleClick(id)}>
    <div className={styles.name}>{name}</div>
    <div className={styles.number}>{number}</div>
  </div>
));

const ContactsList: FC = observer(() => {
  const handleClick = useCallback((id: number) => {
    const { changeMode, toggle } = ContactsModel.Popup;
    const { setSelectemItemId } = ContactsModel.Contacts;
    changeMode('redactAndDelete');
    toggle();
    setSelectemItemId(id);
  }, []);
  return (
    <div>
      {ContactsModel.Contacts.filter.map((contact) => (
        <Item handleClick={handleClick} contact={contact} key={contact.id} />
      ))}
    </div>
  );
});

export default ContactsList;
