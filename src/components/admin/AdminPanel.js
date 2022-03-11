import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from 'components/admin/AdminNav';
import AdminPanelHeader from 'components/admin/AdminPanelHeader';

const AdminPanel = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const burgerBtnHandler = () => {
    setNavbarIsOpen(!navbarIsOpen);
  };

  return (
    <div className='bg-dark-blue text-white min-h-screen align-center'>
      <AdminNav navbarIsOpen={navbarIsOpen} />
      <div>
        <AdminPanelHeader
          burgerBtnHandler={burgerBtnHandler}
          navbarIsOpen={navbarIsOpen}
        />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
