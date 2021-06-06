import './App.css';
import React, { useState,useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import WeatherPage from './Components/WeatherProjet/WeatherPage';
import FavouritePage from './Components/WeatherProjet/FavouritePage'


function App() {
  const [favouriteList,setFavouriteList]=useState([])
  const [choosenCity,setChoosenCity]=useState({choosenName:'',choosenKey:''})
  return (
    <div className="App">        
        <Router>    
          <br />
         <Link to='/'><button>Home</button></Link>  <Link to='/favouritepage'><button>Favourite</button> </Link>
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
     
          <Switch>
             <Route exact path='/' component={() => (<WeatherPage choosenCityKey={choosenCity.choosenKey}  choosenCityName={choosenCity.choosenName} favouriteList={favouriteList} /> )} /> 
             <Route exact path='/favouritepage' component={() => (<FavouritePage setChoosenCity={setChoosenCity} favouriteList={favouriteList} /> )} />   
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;