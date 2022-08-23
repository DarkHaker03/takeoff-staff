import { observer } from 'mobx-react-lite';
import { ContactsModel } from 'pages/contacts';
import { FC, useEffect } from 'react';
import img from 'shared/assets/img/arrowLeft.svg';
import useInput from 'shared/hooks/useInput';
import styles from './styles.module.scss';

const PopupContact: FC = observer(() => {
  const [name, setName] = useInput();
  const [number, setNumber] = useInput();
  const { toggle, mode } = ContactsModel.Popup;
  const {
    add,
    del,
    redact,
    selectedItem,
  } = ContactsModel.Contacts;
  const addContact = () => {
    const confirm = add(name, number);
    if (confirm) toggle();
  };
  const redactContact = () => {
    const confirm = redact(name, number);
    if (confirm) toggle();
  };
  const deleteContact = () => {
    del();
    toggle();
  };
  useEffect(() => {
    if (mode === 'redactAndDelete') {
      setNumber(selectedItem.number);
      setName(selectedItem.name);
    }
  }, []);
  return (
    <div className={styles.popup}>
      <div className={styles.header}>
        <div style={{ cursor: 'pointer' }} onClick={ContactsModel.Popup.toggle}>
          <img src={img} alt="img" className={styles.img} />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.block}>
          <div>Name</div>
          <input value={name} onChange={setName} type="text" />
        </div>
        <div className={styles.block}>
          <div>Number</div>
          <input value={number} onChange={setNumber} type="text" />
        </div>
        {ContactsModel.Popup.mode === 'add'
          ? (
            <button onClick={addContact} type="button" className={styles.btn}>
              Add
            </button>
          )
          : (
            <>
              <button onClick={redactContact} type="button" className={styles.btn}>
                Redact
              </button>
              <button onClick={deleteContact} type="button" className={styles.btn}>
                Delete
              </button>
            </>
          )}
      </div>
    </div>
  );
});

export default PopupContact;
