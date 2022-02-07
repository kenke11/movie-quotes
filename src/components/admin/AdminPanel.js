import { useState } from 'react';
import classes from './AdminPanel.module.css';
import { Outlet } from 'react-router-dom';
import AdminNav from './AdminNav';
import AdminPanelHeader from './AdminPanelHeader';

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
