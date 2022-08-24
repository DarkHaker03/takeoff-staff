import { makeAutoObservable } from 'mobx';
import { USERS } from 'shared/api/users';

class AutoRegistrationClass {
  state = USERS;

  confirm = false;

  selectedUserId = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setConfirm(login: string, password: string) {
    const theUser = this.state.filter((user) => user.login === login)[0];
    const newConfirm = theUser?.password === password;
    if (newConfirm) {
      this.selectedUserId = theUser.id;
    }
    this.confirm = newConfirm;
  }
}

const AutoRegistration = new AutoRegistrationClass();

export { AutoRegistration };
