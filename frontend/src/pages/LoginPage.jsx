import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);

  return (
    <>
      <div className='mx-auto my-8 w-1/2 h-80 2 bg-cyan-700'>
        <h1 className='text-center text-white'>Login</h1>
        <form onSubmit={loginUser}>
          <div className='flex justify-around'>
            <div className='mt-10'>
              <input
                type={'text'}
                name='username'
                placeholder='Username'
              ></input>
            </div>
            <div className='mt-10'>
              <input
                type={'password'}
                name='password'
                placeholder='Password'
              ></input>
            </div>
          </div>

          <div className='flex justify-center mt-10'>
            <button type='submit' className='bg-white px-3 rounded-lg'>
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
