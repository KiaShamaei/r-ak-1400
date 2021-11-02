import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWatches } from '../../store/actions/watchActions/actions';
import MemoizedWatchListCard from './WatchListCard';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './WatchList.scss';

const WatchList = () => {
  const state = useSelector((state) => state.watches);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWatches());
  }, [dispatch]);
  console.log(state);

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
      <Tabs defaultActiveKey='a' id='uncontrolled-tab-example'>
        <Tab eventKey='a' title='محصولات شیمیایی'>
          {watchList.map((el, index) => {
            return (
              <div className='m-3' key={index}>
                <MemoizedWatchListCard data={el} />
              </div>
            );
          })}
        </Tab>
        <Tab eventKey='b' title='خودرویی'></Tab>
        <Tab eventKey='c' title='فولاد'></Tab>
      </Tabs>
    </div>
  );
};
export default WatchList;
