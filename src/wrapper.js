import React from 'react';

export const Wrapper = (props) => {
  return (
    <div className='d-flex justify-content-center align-items-center main-container '>
      <div className='app-container'>{props.children}</div>
    </div>
  );
};
