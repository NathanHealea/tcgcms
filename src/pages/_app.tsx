import { NextPage, AppProps } from '../next.types';
import '../styles/globals.css';
import { FC } from 'react';

/**
 * Determines if a page has a page layout.
 * @param page next page that may or may not contain a page layout
 * @returns true: page has a page layout, false: page does not have a page layout
 */
const hasPageLayout = (page: NextPage) =>
  (page as NextPage).getLayout ? true : false;

/**
 * Application Root
 */
const App: FC<AppProps> = ({ Component, pageProps }) => {
  /**
   * Renders the layout of a page if layout is present
   * @param page React Component exported from files in the page directories
   * @returns Page React component wrapped around a layout if a layout for hte page is defined.
   */
  const renderPageLayout =
    (hasPageLayout(Component) && Component.getLayout) || ((page: any) => page);

  return renderPageLayout(<Component {...pageProps} />);
};

export default App;
