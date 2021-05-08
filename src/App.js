import React, { useEffect, useState } from "react";


import './App.css';
import Tile from './Tile.js'

function App() {

  let server = "http://localhost:3001"
  const [houses, fillHouses] = useState([]);

  // houses.push({ price: '£27,500', area: "Handsworth", type: "Flat", image: `https://media.rightmove.co.uk/dir/crop/10:9-16:9/108k/107051/78903606/107051_RS0730_IMG_11_0000_max_476x317.jpeg` })
  // houses.push({ price: '£1,450,000', area: "Harbourne", type: "House", image: `https://media.rightmove.co.uk/dir/crop/10:9-16:9/93k/92029/104484854/92029_581009_IMG_00_0000_max_476x317.jpeg` })
  // houses.push({ price: '£165,000', area: "Edgbaston", type: "Maisonette", image: `https://media.rightmove.co.uk/dir/crop/10:9-16:9/73k/72455/97846952/72455_107VC_IMG_00_0000_max_476x317.jpg` })

  useEffect(() => {
    async function fetchHouses() {
      let response = await fetch(server + "/houses")
      fillHouses(await response.json())
    }
    fetchHouses()
  }
    , [])

  return (
    <div className="App">
      <header className="App-header">

      </header>



      {/* {houses.map(h => <Tile price={h.price} area={h.area} image={h.image} type={h.type} />)} */}

      {houses.map(
        h =>
          <Tile price={h.price} area={h.area} image={h.image} type={h.type} key={h.id} id={h.id} />
      )
      }

    </div>
  );
}

export default App;
