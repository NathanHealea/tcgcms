import { useAuth } from '@/services/Authentication';
import Image from 'next/image';
import Link from 'next/link';
import { Children, FC } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const UserIcon = () => {
  return (
    <div className='w-6'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
        {/*<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
        <path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z' />
      </svg>
    </div>
  );
};

const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props;
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const AuthenticationOptions = () => {
    return (
      <div className='flex flex-row gap-4'>
        <Link href='/login' className='btn btn-ghost normal-case text-xl'>
          Login
        </Link>
        <Link href='/signup' className='btn btn-default normal-case text-xl'>
          Sign Up
        </Link>
      </div>
    );
  };

  const UserProfile = () => {
    return (
      <div className='dropdown dropdown-end'>
        <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
          <div className='w-10 rounded-full'>
            {user?.photoURL && (
              <Image
                src={user.photoURL || ''}
                alt={`photo of ${user?.displayName}`}
                width={64}
                height={64}
              />
            )}

            {!user?.photoURL && (
              <div className='flex justify-center items-center w-full h-full'>
                <UserIcon />
              </div>
            )}
          </div>
        </label>
        <ul
          tabIndex={0}
          className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
        >
          <li>
            <Link href='/profile' className='justify-between'>
              Profile
            </Link>
          </li>
          <li>
            <button type='button' onClick={handleLogout}>
              logout
            </button>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <nav className='navbar'>
        <div className=''>
          <Link href='/' className='btn btn-ghost normal-case text-xl'>
            TCGCMS
          </Link>
        </div>
        <div className='flex-1' />

        {!user && <AuthenticationOptions />}
        {user && <UserProfile />}
      </nav>
      {children}
    </>
  );
};

export default MainLayout;
