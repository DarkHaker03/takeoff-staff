import { makeAutoObservable } from 'mobx';
import { CONTACTS } from 'shared/api/contacts';
import { USERS } from 'shared/api/users';

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

  constructor() {
    makeAutoObservable(this);
  }

  get length() {
    return this.state.length;
  }

  add(name: string, number: string) {
    this.state = [{ id: 0, name, number }, ...this.state];
  }
}

class PopupAddContactClass {
  state = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggle() {
    this.state = !this.state;
  }
}

const Users = new UsersClass();
const Contacts = new ContactsClass();
const PopupAddContact = new PopupAddContactClass();

export { Contacts, Users, PopupAddContact };
