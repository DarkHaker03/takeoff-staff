import { FC } from 'react';
import { ContactsModel } from 'pages/contacts';
import { observer } from 'mobx-react-lite';

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
        <div onClick={() => handleClick(contact.id)} key={contact.id}>
          <div>{contact.name}</div>
          <div>{contact.number}</div>
        </div>
      ))}
    </div>
  );
});

export default ContactsList;
