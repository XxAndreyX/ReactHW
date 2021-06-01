import Home from './projects/Home.js';
import EditTodo from './projects/EditTodo.js';

import TaskList from './components/TaskList/TaskList.js';
import React, { useState } from 'react';
// react-router-dom
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const state = [ 
  { id:1, 
    name: "Завести новую задачу", 
    description: 'Для выполнения всех задач на день', 
    tasks: [
      {
        id: 4321,
        name: '',
        description: '',
        completed: false
      }
    ],
    completed: false
  }
];

const App = () =>{
    return (
      <Router>
            <div style={{ padding: 8 }}>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/todos/:id" component={EditTodo} />
              </Switch>
            </div>
      </Router>
    )
}

export default App;
