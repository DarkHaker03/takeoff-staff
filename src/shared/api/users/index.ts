type UsersKeys = {
  id: number,
  login: string,
  password: string,
};

const USERS: UsersKeys[] = [
  { id: 4, login: 'medvedev', password: '421' },
  { id: 3, login: 'darker', password: '32' },
  { id: 2, login: 'markerov', password: '23' },
  { id: 1, login: 'chernov', password: '12' },
];

export { USERS };
