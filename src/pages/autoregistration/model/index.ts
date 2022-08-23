import { makeAutoObservable } from 'mobx';
import { USERS } from 'shared/api/users';

class AutoRegistrationClass {
  state = USERS;

  constructor() {
    makeAutoObservable(this);
  }

  confirm(login: string, password: string) {
    return this.state.filter((user) => user.login === login)[0]?.password === password;
  }
}

const AutoRegistration = new AutoRegistrationClass();

export { AutoRegistration };
