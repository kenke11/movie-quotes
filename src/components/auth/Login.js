import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authCtx = useContext(AuthContext);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    });

    let res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    if (res.data.status === 200) {
      const expirationTime = await new Date(
        new Date().getTime() + +res.data.expiresIn * 1000
      );
      await authCtx.login(res.data.token, expirationTime.toISOString());
      await navigate('/admin-panel', { replace: true });
    }

    await setEmail('');
    await setPassword('');
  };

  return (
    <div className='i-center'>
      <div className='max-w-lg mx-auto bg-gray-200 border-gray-500 p-6 rounded-xl'>
        <h1 className='text-center font-bold text-xl'> {t('login')} </h1>
        <form onSubmit={submitHandler} className='mt-4'>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block mb-2 uppercase font-bold text-xs text-gray-700'
            >
              {t('email')}
            </label>
            <input
              type='email'
              className='border border-gray-400 p-2 w-full'
              placeholder={t('email')}
              id='email'
              name='email'
              value={email}
              onChange={emailHandler}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block mb-2 uppercase font-bold text-xs text-gray-700'
            >
              {t('password')}
            </label>
            <input
              type='password'
              className='border border-gray-400 p-2 w-full'
              placeholder={t('password')}
              id='password'
              name='password'
              autoComplete='on'
              value={password}
              onChange={passwordHandler}
            />
          </div>
          <div className='mb-6'>
            <button
              type='submit'
              className='bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 transition duration-150'
            >
              {t('login')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
