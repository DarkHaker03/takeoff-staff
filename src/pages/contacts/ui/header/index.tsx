import { observer } from 'mobx-react-lite';
import { ContactsModel } from 'pages/contacts';
import { FC, useState } from 'react';
import img from 'shared/assets/img/search.svg';
import Cross from 'shared/ui/cross';
import styles from './styles.module.scss';

const Header: FC = observer(() => {
  const [isSeacrh, setIsSearch] = useState<boolean>(false);
  const toggle = () => {
    setIsSearch(!isSeacrh);
  };
  return (
    <header className={styles.header}>
      {isSeacrh
        ? (
          <>
            <input className={styles.input} type="text" value={ContactsModel.Contacts.searchText} onChange={ContactsModel.Contacts.changeSearchText} placeholder="Search..." />
            <Cross onClick={toggle} />
          </>
        )
        : (
          <>
            <span> Contacts </span>
            <div onClick={toggle} className={styles.searchIcon}>
              <img src={img} alt="" />
            </div>
          </>
        )}
    </header>
  );
});

export default Header;
