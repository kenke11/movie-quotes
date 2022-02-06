import Nav from '../changeLanguageNav/Nav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
