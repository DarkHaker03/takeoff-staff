import { observer } from 'mobx-react-lite';
import { ContactsModel } from 'pages/contacts';
import { FC } from 'react';
import img from 'shared/assets/img/search.svg';
import Cross from 'shared/ui/cross';
import styles from './styles.module.scss';

const Header: FC = observer(() => (
  <header className={styles.header}>
    {ContactsModel.Seach.state
      ? (
        <>
          <input className={styles.input} type="text" value={ContactsModel.Contacts.searchText} onChange={ContactsModel.Contacts.changeSearchText} placeholder="Search..." />
          <Cross onClick={ContactsModel.Seach.toggle} />
        </>
      )
      : (
        <>
          <span> Contacts </span>
          <div onClick={ContactsModel.Seach.toggle} className={styles.searchIcon}>
            <img src={img} alt="" />
          </div>
        </>
      )}
  </header>
));

export default Header;
