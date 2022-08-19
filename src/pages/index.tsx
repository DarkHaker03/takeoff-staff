import { FC } from 'react';
import { Route, Routes } from 'react-router';
import AutoRegistration from './autoregistration';

const Pages: FC = () => {
  console.log('delete this console.log');
  return (
    <div>
      <Routes>
        <Route path="/autoregistration" element={<AutoRegistration />} />
      </Routes>
    </div>
  );
};

export default Pages;
