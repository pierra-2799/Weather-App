import React from 'react'

import SearchBar from './Components/SearchBar'
import Home from './Components/HomePage'
import Forecast from './Components/ForecastPage'
import Details from './Components/DetailsPage'
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div>
        <SearchBar/>
        <Home/>
        <Details/>
        <Forecast/>
      </div>
    )
  }
}


export default App;
