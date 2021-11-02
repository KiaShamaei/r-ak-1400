import React from 'react';

import './WatchListCard.scss';
import placeholder from '../../assets/images/icon/chart-placeholder.svg';

export default function WatchListCard({ data }) {
  return (
    <div className='p-2 watchListCard-countainer'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='bullets bg-green'></p>
          <p className='pr-2 font-family-bold'>{data.name}</p>
        </div>

        <img src={placeholder} />

        <div className='d-flex flex-column  justify-content-between align-items-center'>
          <p className='font-family-bold'>{data.balance}</p>

          <p className={data.balancePercent < 0 ? 'color-red' : 'color-green'}>
            {data.balancePercent}
          </p>
        </div>
      </div>

      <div className='pt-2  d-flex justify-content-between align-items-center'>
        <p>پایانی</p>
        <p>تعداد</p>
        <p>ارزش</p>
      </div>

      <div className='d-flex justify-content-between align-items-center'>
        <p className={data.endPricePercent < 0 ? 'color-red' : 'color-green'}>
          <span>{data.endPrice}</span>
          <span className='ml-2'>({data.endPricePercent})</span>
        </p>
        <p>{data.count}</p>
        <p>{data.value}</p>
      </div>
    </div>
  );
}

export const MemoizedWatchListCard = React.memo(WatchListCard);
