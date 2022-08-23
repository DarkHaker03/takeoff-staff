import { makeAutoObservable } from 'mobx';
import { CONTACTS } from 'shared/api/contacts';
import { USERS } from 'shared/api/users';

const stringHandler = (x: string) => x.toLowerCase().replace(/ /g, '');
function matchingLetters(titleOfItem: string, valueOfSearch: string) {
  return stringHandler(titleOfItem).startsWith(stringHandler(valueOfSearch));
}

class UsersClass {
  state = USERS;

  constructor() {
    makeAutoObservable(this);
  }

  get length() {
    return this.state.length;
  }
}

class ContactsClass {
  state = CONTACTS;

  searchText = '';

  selectedItemId: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  add = (name: string, number: string) => {
    if (number.length < 12) {
      alert('number must not have less than 12 digits');
      return false;
    }
    this.state = [{ id: this.state.length + 1, name, number }, ...this.state];
    return true;
  };

  del = () => {
    this.state = this.state.filter((item) => item.id !== this.selectedItemId);
  };

  redact = (name: string, number: string) => {
    if (number.length < 12) {
      alert('number must not have less than 12 digits');
      return false;
    }
    const newState = this.state.map((contact) => {
      if (contact.id === this.selectedItemId) {
        return { id: contact.id, name, number };
      }
      return contact;
    });
    this.state = newState;
    return true;
  };

  changeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.searchText = e.target.value;
  };

  setSelectemItemId = (id: number) => {
    this.selectedItemId = id;
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
}

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

class SeacrhClass {
  state = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggle = () => {
    this.state = !this.state;
  };
}

const Users = new UsersClass();
const Contacts = new ContactsClass();
const Popup = new PopupClass();
const Seach = new SeacrhClass();

export {
  Contacts,
  Users,
  Popup,
  Seach,
};
