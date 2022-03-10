import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import classes from './AdminPanel.module.css';
import AdminNav from 'components/admin/AdminNav';
import AdminPanelHeader from 'components/admin/AdminPanelHeader';

const AdminPanel = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const burgerBtnHandler = () => {
    setNavbarIsOpen(!navbarIsOpen);
  };

  return (
    <div className={classes.wrapper}>
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
