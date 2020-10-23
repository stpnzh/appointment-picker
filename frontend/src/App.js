import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import Home from './components/Home';

const App = () => {
  
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const items = await fetch('http://localhost:5000/api');
    setData(await items.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Home data={data} fetchData={fetchData}/>
    </div>
  );
}

export default App;
