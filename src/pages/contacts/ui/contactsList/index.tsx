import { FC } from 'react';
import { ContactsModel } from 'pages/contacts';
import { observer } from 'mobx-react-lite';

const ContactsList: FC = observer(() => {
  console.log(3);
  return (
    <div>
      {ContactsModel.Contacts.state.map((contact) => (
        <div>
          <div>{contact.name}</div>
          <div>{contact.number}</div>
        </div>
      ))}
    </div>
  );
});

export default ContactsList;
