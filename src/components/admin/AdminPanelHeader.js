import BurgerMenuIcon from 'components/UI/icons/BurgerMenuIcon';

const AdminPanelHeader = ({ navbarIsOpen, burgerBtnHandler }) => {
  const burgerClasses = [navbarIsOpen ? 'bg-light-orange' : ''];

  return (
    <header className='dark-blue flex justify-end py-10 px-10 text-white border-b border-gray-600'>
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
            <BurgerMenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminPanelHeader;
