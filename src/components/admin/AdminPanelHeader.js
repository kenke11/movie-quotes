import classes from './AdminPanel.module.css';

const AdminPanelHeader = ({ navbarIsOpen, burgerBtnHandler }) => {
  const burgerClasses = [navbarIsOpen ? classes.burgerActive : ''];

  return (
    <header className='flex justify-end py-4 px-10 text-white border-b border-gray-600'>
      <div className='w-9/12 md:w-8/12 flex justify-between'>
        <div className='text-4xl font-serif font-bold'>
          <span className='text-orange-400'>Movies </span> World
        </div>

        <div>
          <button
            onClick={burgerBtnHandler}
            type='button'
            className={`${burgerClasses} text-white border border-2 rounded-md border-gray-400 hover:bg-orange-500 transition duration-200`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminPanelHeader;
