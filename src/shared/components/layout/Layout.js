import React from 'react';
import WatchList from '../../../pages/marketWatch/WatchList';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

import './Layout.scss';

const Layout = (props) => {
  return (
    <div className='h-100 d-flex flex-column'>
      <Header />
      <WatchList />
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
