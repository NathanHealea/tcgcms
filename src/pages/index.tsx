import { NextPage } from '@/next.types';
import Link from 'next/link';

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = (props) => {
  return (
    <>
      <main className='flex flex-1 justify-center items-center'>
        <section className='hero'>
          <div className='hero-content text-center'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-6xl font-bold'>Trading Card Game</h1>
              <h2 className='text-2xl'>Collection Management Systems</h2>
              <div className='flex justify-center items-center gap-4'>
                <Link className='btn btn-ghost' href='/login'>
                  Log In
                </Link>
                <Link className=' btn btn-primary' href='/signup'>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
