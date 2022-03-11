import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AuthContext from 'store/auth-context';
import PersonIcons from 'components/UI/icons/PersonIcons';
import ExitIcon from 'components/UI/icons/ExitIcon';
import CatalogIcon from 'components/UI/icons/CatalogIcon';
import PlusIcon from 'components/UI/icons/PlusIcon';

const AdminNav = ({ navbarIsOpen }) => {
  const authCtx = useContext(AuthContext);

  const { t, i18n } = useTranslation();

  const languageHandle = (lang) => {
    i18n.changeLanguage(lang);
  };

  const enBtn = i18n.language === 'en' ? ' bg-orange-500' : '';
  const geBtn = i18n.language === 'ge' ? ' bg-orange-500' : '';

  const navClasses = [
    navbarIsOpen
      ? 'opacity-1 animate-[navOpen_0.5s_ease-in-out]'
      : 'opacity-0 -z-50 animate-[navClose_1s_ease-in-out]',
  ];

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div
      className={`bg-dark-blue text-white fixed flex flex-col transition duration-200 ease-out ${navClasses} top-0 bottom-0 border-r border-gray-600 z-40`}
    >
      <div className='border-b border-gray-700 px-5 py-5'>
        <h1 className='text-4xl font-serif font-bold'>
          <span className='text-orange-400'>Admin</span>
          <span>Panel</span>
        </h1>
      </div>
      <div className='flex justify-between align-middle space-x-4 px-5 py-5 border-b border-gray-700'>
        <div className='flex justify-center items-center px-3 rounded-md bg-gray-800'>
          <PersonIcons />
        </div>
        <div className='flex flex-col'>
          <span className='font-serif'>{t('admin')}</span>
        </div>
        <div
          onClick={logoutHandler}
          className='flex border-2 border-orange-400 justify-center items-center px-3 rounded-md bg-gray-800 cursor-pointer hover:bg-gray-900'
        >
          <ExitIcon />
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
                'flex align-center p-5 uppercase transition duration-200 hover:bg-gray-700 ' +
                (isActive ? 'bg-gray-700' : ' ')
              }
            >
              <span>
                <CatalogIcon />
              </span>
              <span>{t('catalog')}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='movie/create'
              className={({ isActive }) =>
                'flex align-center p-5 uppercase transition duration-200 hover:bg-gray-700 ' +
                (isActive ? 'bg-gray-700' : ' ')
              }
            >
              <span>
                <PlusIcon />
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
