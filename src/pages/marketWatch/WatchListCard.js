import React from 'react';

import './WatchListCard.scss';

export default function WatchListCard({ data }) {
  return (
    <div className='p-2 watchListCard-countainer'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='bullets bg-green'></p>
          <p className='pr-2'>{data.name}</p>
        </div>
        <p>{data.name}</p>
        <div className='d-flex flex-column  justify-content-between align-items-center'>
          <p className=''>{data.balance}</p>
          <p className=''>{data.balancePercent}</p>
        </div>
      </div>

      <div className='pt-2  d-flex justify-content-between align-items-center'>
        <p>پایانی</p>
        <p>تعداد</p>
        <p>ارزش</p>
      </div>

      <div className='d-flex justify-content-between align-items-center'>
        <p>
          <span className='pl-2'>({data.endPricePercent})</span>
          <span>{data.endPrice}</span>
        </p>
        <p>{data.count}</p>
        <p>{data.value}</p>
      </div>
    </div>
  );
}

export const MemoizedWatchListCard = React.memo(WatchListCard);
