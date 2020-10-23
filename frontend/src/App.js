import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bulma/css/bulma.css'
import './App.css'

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const items = await fetch('http://localhost:5000/api/appts');
    setData(await items.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact>
            <Home data={data} fetchData={fetchData}/>
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
