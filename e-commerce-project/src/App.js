import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage=()=> (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const HatsDetail = props =>{
  return (
    <div>
    <h1>HATS DETAIL PAGE: {props.match.params.hatId}</h1>
  </div>
  );
} 
 


/*use <Switch> to have more control over the code and where the user can go and if only one route
matches, it is the only thing that'll be rendered */
function App(){
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
   
    </Switch>
    </div>
  );
}

export default App;