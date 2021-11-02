import React from 'react';
import './Header.scss';
import Form from 'react-bootstrap/Form';
import logo from '../../../assets/images/logo/logo.svg';
import openIcon from '../../../assets/images/icon/open.svg';
import info from '../../../assets/images/icon/info.svg';
import placeholder from '../../../assets/images/icon/profile-placeholder.svg';

export const Header = (props) => {
  return (
    <div className='p-2 d-flex justify-content-between align-items-center header'>
      <img src={logo} />

      <div className='mr-auto pl-3 info'>
        <div className='d-flex justify-content-end '>
          <p>13:37:36</p>
          <img src={openIcon} />
        </div>
        <div className='d-flex justify-content-end'>
          <p className='color-red'>(-2.5)</p>
          <p className='color-red'>448</p>
          <p>431683.97</p>
          <img src={info} />
        </div>
      </div>

      <img src={placeholder} />
    </div>
  );
};
