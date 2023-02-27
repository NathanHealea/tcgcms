import { NextPage } from '@/next.types';

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = (props) => {
  return (
    <>
      <main className='flex flex-1 justify-center items-center'>
        <div className='text-center space-y-4'>
          <h1 className='text-6xl'>Trading Card Game</h1>
          <h2 className='text-2xl'>Collection Management Systems</h2>
        </div>
      </main>
    </>
  );
};

export default HomePage;
