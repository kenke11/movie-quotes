import React from 'react';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const { i18n } = useTranslation();

  const languageHandle = (lang) => {
    i18n.changeLanguage(lang);
  };

  const enBtn = i18n.language === 'en' ? 'text-black bg-white' : 'text-white';
  const geBtn = i18n.language === 'ge' ? 'text-black bg-white' : 'text-white';

  return (
    <div className='fixed flex flex-col items-center justify-end pb-8 md:pb-0 md:justify-center h-screen ml-6 md:ml-12'>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => languageHandle('en')}
              className={`md:text-2xl border border-white mt-3 rounded-full px-2 py-1.5 ${enBtn} cursor-pointer uppercase`}
            >
              EN
            </button>
          </li>

          <li>
            <button
              onClick={() => languageHandle('ge')}
              className={`md:text-2xl border border-white mt-3 rounded-full px-2 py-1.5 ${geBtn} cursor-pointer`}
            >
              KA
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
