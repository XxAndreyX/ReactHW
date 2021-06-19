
import Home from './projects/Home.js';
import EditTodo from './projects/EditTodo.js';
import { Provider } from 'react-redux';
import TaskList from './components/TaskList/TaskList.js';
import React, { useState } from 'react';
import store from './AppStore';
// react-router-dom
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const App = () =>{
    return (
      <Provider store={store}>
        <Router>
              <div style={{ padding: 8 }}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/todos/:id" component={EditTodo} />
                </Switch>
              </div>
        </Router>
      </Provider>
    )

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
