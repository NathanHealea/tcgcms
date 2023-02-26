import { AppProps as DefaultAppProps } from 'next/app';
import { NextPage as DefaultNextPage } from 'next/types';

/**
 * NextPage with Layout
 * @reference https://nextjs.org/docs/basic-features/layouts#per-page-layouts
 */
export type NextPage<P = {}, IP = P> = DefaultNextPage<
  PageTransitionEvent,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

/**
 * Next App with pages that may contain page layouts.
 * @reference https://nextjs.org/docs/basic-features/layouts#per-page-layouts
 */
export type AppProps = DefaultAppProps & {
  Component: NextPage;
};
