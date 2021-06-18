import '../App.css';
import Tasks from '../components/TaskList/TaskList.js';
import AddTask from '../components/TaskAdd/TaskAdd.js';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const ID_PROJECT = 34345;

const Home = () => {
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://valerystatinov.com/api/projects/', {
      headers: {
          'Token': 'Valera',
          'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(todos => {
      debugger;
      if (todos && todos.length) {
        todos.forEach(todo => {
          todo.childrens = todo?.childrens ? todo.childrens : [];
          todo.completed = todo?.completed ? todo?.completes : false;
        });
        dispatch({ type: 'INIT_TODO', todos });
      }
    })
  }, []);
  
    function toggleTodo(id) {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      );
    };

    function addTask(name, description){
      setTodos(todos.concat([{
        id: todos.length - 1, 
        name,
        description,
        completed: false,
        childrens: []
      }]))
    };

    function createChildren(v, d, i) {
        console.log('');
    };

    function removeTodo(id) {
      setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
          <div className = 'App'>
            <h1>My list todo</h1>
            <AddTask onCreate = {addTask} />
            <Tasks tasks={todos} todos={todos} onToggle={toggleTodo} createChildren={createChildren} onRemove={removeTodo}/>
          </div>
    )
}

export default Home;
