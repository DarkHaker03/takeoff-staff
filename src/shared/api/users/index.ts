type UsersKeys = {
  id: number,
  login: string,
  password: string,
};

const USERS: UsersKeys[] = [
  { id: 1, login: 'medvedev', password: '1' },
  { id: 2, login: 'darker', password: '2' },
  { id: 3, login: 'markerov', password: '3' },
  { id: 4, login: 'chernov', password: '4' },
];

export { USERS };
