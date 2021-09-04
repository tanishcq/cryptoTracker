import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Coin from './Coin';
import Anime from './components/anime'

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')
  
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
      setCoins(res.data)
    }).catch(error=> alert('error 404: Not Found :('))
  }, []);
  
  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <>
    <div className="container-fluid upper-body">
      <nav class="navbar navbar-dark" style={{backgroundImage: 'linear-gradient(-225deg, #ac32e4 0%, #7918f2 48%, #4801ff 100%)', fontFamily: '"Monoton", cursive', fontWeight: 400}}>
        <div class="container-fluid navbar-container">
        <h2 class="navbar-brand ms-auto me-auto"><span id="navbar-text-1">crypto</span><span id="navbar-text-2">RICH</span></h2>
        </div>
      </nav>
    </div>
    
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">$eArch A currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      {
        filteredCoins.map(coin => {
          return (
            <Coin 
            key={coin.id} 
            name={coin.name} 
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume} />
          )
        })
      }
    </div>
    </>
  );
}

export default App;
