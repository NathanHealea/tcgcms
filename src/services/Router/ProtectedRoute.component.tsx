import { useAuth } from '../Authentication';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = (props) => {
  const { children } = props;
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user == null) {
      router.push(`/login`);
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
