import React from 'react';

const Nav = () => {
  return (
    <div className='fixed flex flex-col items-center justify-end pb-8 md:pb-0 md:justify-center h-screen ml-6 md:ml-12'>
      <nav>
        <ul>
          <li className='md:text-2xl border border-white mt-3 rounded-full px-2 py-1.5 text-black bg-white cursor-pointer'>
            EN
          </li>
          <li className='md:text-2xl border border-white mt-3 rounded-full px-2 py-1.5 text-white cursor-pointer'>
            KA
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
