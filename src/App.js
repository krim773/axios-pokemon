import axios from 'axios';
import React, { useState } from 'react';

import './App.css';

function App() {

  const [responseData, setResponseData] = useState([]);

  const preguntaPoke = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      setResponseData(response.data.results);
    }
    catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <button onClick={() => preguntaPoke()} type="button" className="btn">Fetch Pokemon</button>
      <ol>
        {responseData.map((pokemon) =>
          <li >{pokemon.name}</li>
        )}
      </ol>
    </>
  );
}

export default App;