import { useEffect, useState } from 'react';
import Cart from './Components/Cart/Cart';
import Display from './Components/Display/Display';
import playerData from './fakePlayersData/fakePlayersData.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[data, setData] = useState([]);
  const [cart, addCart] = useState([])
  useEffect( () => {
    setData(playerData);
  }, [])

  const handleEvent = (clickedPlayer) => {
    const newCart = [...cart, clickedPlayer]
    addCart(newCart)
    console.log(clickedPlayer.name)
  }
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Welcome 2021 BPL Player Selection Site</h1>
      <Cart cart={cart}></Cart>
      <ul>
        {
          data.map(player => <Display player={player} handleEvent={handleEvent} key={player.id}></Display>)
        }
      </ul>
    </div>
  );
}

export default App;
