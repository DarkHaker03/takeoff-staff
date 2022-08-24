type ContactKeys = {
  id: number,
  number: string,
  name: string,
}

type ContactsOfAllUsersKeys = {
  id: number,
  list: ContactKeys[]
};

const CONTACTS_OF_ALL_USERS: ContactsOfAllUsersKeys[] = [
  {
    id: 3,
    list: [
      { id: 4, number: '+7 927 312 14 51', name: 'Artur' },
      { id: 3, number: '+7 333 532 62 64', name: 'Dmitry' },
      { id: 2, number: '+7 919 432 52 11', name: 'Timur' },
      { id: 1, number: '+7 111 632 82 42', name: 'Alisa' },
    ],
  },
  {
    id: 2,
    list: [
      { id: 4, number: '+7 919 642 62 53', name: 'Denis' },
      { id: 3, number: '+7 927 662 22 22', name: 'Bogdan' },
      { id: 2, number: '+7 987 672 32 11', name: 'Artur' },
      { id: 1, number: '+7 444 622 82 85', name: 'Anton' },
    ],
  },
  {
    id: 1,
    list: [
      { id: 4, number: '+7 987 542 22 17', name: 'Valery' },
      { id: 3, number: '+7 919 322 82 44', name: 'Polina' },
      { id: 2, number: '+7 932 212 72 46', name: 'Bogdan' },
      { id: 1, number: '+7 919 662 62 47', name: 'Timur' },
    ],
  },
];

function ContactsOfUser(id: number) {
  return CONTACTS_OF_ALL_USERS.filter((contactsOfTheUser) => contactsOfTheUser.id === id)[0].list;
}

export { ContactsOfUser };
export type { ContactKeys };
