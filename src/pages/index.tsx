import { FC } from 'react';
import { Route, Routes } from 'react-router';
import { AutoRegistration } from './autoregistration';
import { Contacts } from './contacts';

const Pages: FC = () => {
  console.log('delete this console.log');
  return (
    <div>
      <Routes>
        <Route path="/autoregistration" element={<AutoRegistration />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default Pages;
