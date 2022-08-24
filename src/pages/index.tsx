import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router';
import { AutoRegistration, AutoregistrationModel } from './autoregistration';
import { Contacts } from './contacts';

const Pages: FC = observer(() => {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const { confirm } = AutoregistrationModel.AutoRegistration;
  useEffect(() => {
    if (currentPath === '/autoregistration') return;
    if (!confirm) navigate('/autoregistration');
  }, [currentPath]);
  return (
    <Routes>
      <Route path="/autoregistration" element={<AutoRegistration />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
});

export default Pages;
