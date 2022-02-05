import NewsFeed from './components/NewsFeed';
import CurrencyConverter from './components/CurrencyConverter';

const App = () => {

  return (
    <div className='app'>
      <h1 className='header'>Crypto Dashboard</h1>
      <div className='home'>
        <CurrencyConverter />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
