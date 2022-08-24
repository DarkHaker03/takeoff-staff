import { makeAutoObservable, reaction } from 'mobx';
import { AutoregistrationModel } from 'pages/autoregistration';
import { ContactKeys, ContactsOfUser } from 'shared/api/contacts';

class ContactsClass {
  private state: ContactKeys[] = [];

  private searchText = '';

  private selectedItemId: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  add = (name: string, number: string) => {
    if (checkNumberAndAlert(number.length)) return false;
    this.setState([{ id: (this.state[0]?.id ?? 0) + 1, name, number }, ...this.state]);
    return true;
  };

  del = () => {
    this.setState(this.state.filter((item) => item.id !== this.selectedItemId));
  };

  redact = (name: string, number: string) => {
    if (checkNumberAndAlert(number.length)) return false;
    const newState = this.state.map((contact) => {
      if (contact.id === this.selectedItemId) {
        return { id: contact.id, name, number };
      }
      return contact;
    });
    this.setState(newState);
    return true;
  };

  changeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.searchText = e.target.value;
  };

  setSelectemItemId = (id: number) => {
    this.selectedItemId = id;
  };

  setState = (newState: ContactKeys[]) => {
    this.state = newState;
  };

  get selectedItem() {
    return this.state.filter((contact) => contact.id === this.selectedItemId)[0];
  }

  get filter() {
    return this.state.filter(({ name }) => {
      if (this.searchText.length !== 0) {
        return matchingLetters(name, this.searchText);
      }
      return true;
    });
  }

  get length() {
    return this.state.length;
  }

  get getSearchText() {
    return this.searchText;
  }

  get getState() {
    return this.state;
  }
}

const Contacts = new ContactsClass();

reaction(
  () => AutoregistrationModel.AutoRegistration.selectedUserId,
  (id) => {
    Contacts.setState(ContactsOfUser(id));
  },
);

type PopupMode = 'add' | 'redactAndDelete';

class PopupClass {
  state = false;

  mode: PopupMode = 'add';

  constructor() {
    makeAutoObservable(this);
  }

  toggle = () => {
    this.state = !this.state;
  };

  changeMode = (value: PopupMode) => {
    this.mode = value;
  };
}

const Popup = new PopupClass();

const stringHandler = (x: string) => x.toLowerCase().replace(/ /g, '');
function matchingLetters(titleOfItem: string, valueOfSearch: string) {
  return stringHandler(titleOfItem).startsWith(stringHandler(valueOfSearch));
}
function checkNumberAndAlert(numberLength: number) {
  if (numberLength < 12) {
    alert('number must not have less than 12 digits');
    return true;
  }
  return false;
}
export {
  Contacts,
  Popup,
};
