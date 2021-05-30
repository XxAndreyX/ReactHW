import './App.css';
import React, { useState } from 'react';
import ToDo from './components/ToDo';

class MytodoList extends React.Component{
  render(){
    return(
      <ToDo/>
    )
  }
}

const App = () =>{
  return(
  <div className = 'App'>
    <h1>MyList</h1>
    <MytodoList/>
  </div>)

}
export default App;
