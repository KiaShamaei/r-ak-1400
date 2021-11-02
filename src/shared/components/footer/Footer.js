import React from 'react';
import './Footer.scss';

import placeholder from '../../../assets/images/icon/watch.svg';

export const Footer = (props) => {
  const menu = [
    {
      name: 'پرتفوی',
      url: '',
    },
    {
      name: 'دیده بان',
      url: '',
    },
    {
      name: 'جستجو',
      url: '',
    },
    {
      name: 'بازار',
      url: '',
    },
    {
      name: 'سفارش ها',
      url: '',
    },
  ];

  return (
    <div className='p-2 d-flex justify-content-between align-items-center footer-menu'>
      {menu.map((el, index) => {
        return (
          <div className='d-flex flex-column justify-content-center  align-items-center menu-item'>
            <img src={placeholder} />
            <p>{el.name}</p>
          </div>
        );
      })}
    </div>
  );
};
