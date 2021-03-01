import { useEffect, useState } from 'react';
import Cart from './Components/Cart/Cart';
import Display from './Components/Display/Display';
import playerData from './fakePlayersData/fakePlayersData.json';

function App() {
  const[data, setData] = useState([]);
  const [cart, addCart] = useState([])
  useEffect( () => {
    setData(playerData);
  }, [])

  const handleEvent = (clickedPlayer) => {
    const newCart = [...cart, clickedPlayer]
    addCart(newCart)
  }
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Welcome 2021 BPL Player Selection Site</h1>
      <Cart cart={cart}></Cart>
      {
        data.map(player => <Display player={player} handleEvent={handleEvent} key={player.id}></Display>)
      }
    </div>
  );
}

export default App;
