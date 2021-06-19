import '../App.css';
import Tasks from '../components/TaskList/TaskList.js';
import AddTask from '../components/TaskAdd/TaskAdd.js';
import React, { useState } from 'react';

const state = [ 
  { id:1, 
    name: "Завести новую задачу", 
    description: 'Для выполнения всех задач на день', 
    childrens: [{
      id:2, 
      name: "Дочерняя задача", 
      description: 'Описание дочерней задачи',
      completed: false
    }],
    completed: false}
];

const Home = () =>{
  const [todos, setTodos] = useState(state);
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
