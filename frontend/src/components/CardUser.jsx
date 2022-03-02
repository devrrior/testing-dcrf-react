import { useState, useEffect } from 'react';

const CardUser = () => {
  let [user, setUser] = useState([]);

  useEffect(() => {
    user = getUser();
  }, []);

  const getUser = async () => {
    await fetch('http://127.0.0.1:8000/')
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  return (
    <>
      <div className='bg-slate-200 rounded-lg w-1/4'>
        {/* header */}
        <div className='bg-sky-100 rounded-t-lg py-5 px-8 text-xl font-extrabold text-center italic'>
          Usuario: {user.name}
        </div>
        {/* body */}
        <div className='bg-sky-300 rounded-b-lg p-8 text-lg text-center underline'>
          Age: {user.age}
        </div>
      </div>
    </>
  );
};

export default CardUser;
