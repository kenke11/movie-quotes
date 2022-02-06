import classes from './MovieCatalog.module.css';

const MovieCatalog = () => {
  return (
    <div className='w-10/12 md:w-8/12 m-auto mt-10'>
      <div className='w-full mb-3'>
        <input
          className='w-full px-5 py-3 rounded-md bg-gray-800 text-white'
          type='text'
          placeholder='Find movie / tv series...'
        />
      </div>

      <div
        className={`${classes['calc-table']} rounded-md bg-gray-800 shadow overflow-x-auto border-b border-gray-600`}
      >
        <table className='min-w-full divide-y divide-gray-900'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                ID
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Created Date
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='text-white divide-y divide-gray-900  overflow-y-auto'>
            <tr className='rounded-md mb-2'>
              <td className='px-6 py-4 text-sm font-medium'>11</td>
              <td className='px-6 py-4 text-sm font-medium'>Naruto</td>
              <td className='px-6 py-4 text-sm font-medium'>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium space-y-1 md:space-y-0 md:space-x-3'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>12</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='mb-2'>
              <td className='px-6 py-4 text-sm font-medium '>13</td>
              <td className='px-6 py-4 text-sm font-medium '>Naruto</td>
              <td className='px-6 py-4  text-sm font-medium '>22 07 2021</td>
              <td className='px-6 py-4  text-sm font-medium md:space-x-3 space-y-1 md:space-y-0'>
                <button className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieCatalog;
