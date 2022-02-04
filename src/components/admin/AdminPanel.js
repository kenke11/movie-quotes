import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const AdminPanel = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div className='text-white'>
      <h1>Admin Panel Page</h1>

      <button
        className='px-5 py-2 border border-blue-700 bg-blue-400 hover:bg-blue-800 transition duration-200 rounded-md'
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminPanel;
