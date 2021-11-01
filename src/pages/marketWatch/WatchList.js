import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWatchs } from '../../store/actions/watchActions/actions';
import MemoizedWatchListCard from './WatchListCard';

// #WATCHLIST
import './WatchList.scss';


const WatchList = () => {
  const state = useSelector(state => state.watchs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWatchs())
  }, [dispatch])
  console.log(state)

  const watchList = [
    {
      active: true,
      name: 'شصدفح',
      balance: 20403,
      balancePercent: 2.35,
      endPrice: 13211,
      endPricePercent: 2.33,
      value: 296380500,
      count: 1950,
    },
    {
      active: true,
      name: 'خساپا',
      balance: 30203,
      balancePercent: -3.37,
      endPrice: 13211,
      endPricePercent: -3.47,
      value: 196380700,
      count: 1235,
    },
  ];
  return (
    <div className='h-100 watchList-container'>
    {watchList.map((el , index) => {
      return (
        <div className='m-3' key={index}>
          <MemoizedWatchListCard data={el}  />
        </div>
      );
    })}
  </div>
  );
};
export default WatchList;
