import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <Link to={'/'} className='underline text-blue-500'>
        Home
      </Link>
      <span> | </span>

      {user ? (
        <p className='inline-block underline text-blue-500' onClick={logoutUser}>Logout</p>
      ) : (
        <Link to={'/login'} className='underline text-blue-500'>
          Login
        </Link>
      )}

      {user && <div>Hola {user.username}</div>}
    </>
  );
};

export default Header;
