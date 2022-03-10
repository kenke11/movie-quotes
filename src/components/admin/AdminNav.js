import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classes from './AdminPanel.module.css';
import AuthContext from 'store/auth-context';

const AdminNav = ({ navbarIsOpen }) => {
  const authCtx = useContext(AuthContext);

  const { t, i18n } = useTranslation();

  const languageHandle = (lang) => {
    i18n.changeLanguage(lang);
  };

  const enBtn = i18n.language === 'en' ? ' bg-orange-500' : '';
  const geBtn = i18n.language === 'ge' ? ' bg-orange-500' : '';

  const navClasses = [navbarIsOpen ? classes.navOpen : classes.navClosed];

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div
      className={`${classes['nav-bar']} ${navClasses}  top-0 bottom-0 border-r border-gray-600 z-40`}
    >
      <div className='border-b border-gray-700 px-5 py-5'>
        <h1 className='text-4xl font-serif font-bold'>
          <span className='text-orange-400'>Admin</span>
          <span>Panel</span>
        </h1>
      </div>
      <div className='flex justify-between align-middle space-x-4 px-5 py-5 border-b border-gray-700'>
        <div className='flex justify-center items-center px-3 rounded-md bg-gray-800'>
          <svg
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
            />
          </svg>
        </div>
        <div className='flex flex-col'>
          <span className='font-serif'>{t('admin')}</span>
        </div>
        <div
          onClick={logoutHandler}
          className='flex border-2 border-orange-400 justify-center items-center px-3 rounded-md bg-gray-800 cursor-pointer hover:bg-gray-900'
        >
          <svg
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
            />
          </svg>
        </div>
      </div>

      <div className='border-b border-gray-700 px-5 py-5'>
        <div className='flex justify-center align-middle space-x-5'>
          <button
            onClick={() => languageHandle('en')}
            className={`rounded-full border-2 px-3 py-3 font-bold font-serif ${enBtn}`}
          >
            EN
          </button>
          <button
            onClick={() => languageHandle('ge')}
            className={`rounded-full border-2 px-3 py-3 font-bold font-serif ${geBtn}`}
          >
            GE
          </button>
        </div>
      </div>

      <div className=' py-5'>
        <ul className=''>
          <li>
            <NavLink
              to='movies'
              className={({ isActive }) =>
                isActive ? classes['active-link'] : classes['link']
              }
            >
              <span>
                <svg
                  className='h-5 w-5 mr-3'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
                  />
                </svg>
              </span>
              <span>{t('catalog')}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='movie/create'
              className={({ isActive }) =>
                isActive ? classes['active-link'] : classes['link']
              }
            >
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 mr-3'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              <span>{t('create')}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNav;
