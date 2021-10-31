import './App.scss';

// #WATCHLIST
import './pages/marketWatch/WatchList.scss';
import MemoizedWatchListCard from './pages/marketWatch/WatchListCard';

function App(props) {
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
    <div className='d-flex justify-content-center align-items-center main-container'>
      <div className='app-container'>
        {/* #WATCHLIST */}
        <div className='h-100 watchList-container'>
          {watchList.map((el) => {
            return (
              <div className='m-3'>
                <MemoizedWatchListCard data={el} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
