import { NextPage } from '@/next.types';
import { useAuth } from '@/services/Authentication';
import { ProtectedRoute } from '@/services/Router';
import Link from 'next/link';

interface DashboardIndexPageProps {}

const DashboardIndexPage: NextPage<DashboardIndexPageProps> = (props) => {
  const { logout } = useAuth();

  const handleLogout = () => logout();
  return (
    <main className='flex flex-1 justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1>Dashboard</h1>
        <button
          type='button'
          onClick={handleLogout}
          className='btn btn-primary btn-outline'
        >
          Logout
        </button>
        <Link href='/'>Home</Link>
        <Link href='/collection'>Collection</Link>
      </div>
    </main>
  );
};

DashboardIndexPage.getLayout = (page) => {
  return <ProtectedRoute>{page}</ProtectedRoute>;
};

export default DashboardIndexPage;
