import React from 'react';
import WatchList from '../../../pages/marketWatch/WatchList';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

const Layout = (props) => {
  return (
    <div className='h-100 br1'>
      <Header />
      <WatchList />
      <Footer />
    </div>
  );
};

export default Layout;