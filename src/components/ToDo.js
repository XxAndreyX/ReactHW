import Tasks from './TaskList/TaskList.js';
import AddTask from './TaskAdd/TaskAdd.js';
import React, { useState } from 'react';


const state = [ 
    {id:1, name: "Завести новую задачу", description: 'Для выполнения всех задач на день', completed: false}
  ];
  
const ToDo = () =>{
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
        completed: false
      }]))
  
    };
  
    function removeTodo(id) {
      setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
          <AddTask onCreate = {addTask}/>
          <Tasks tasks={todos} onToggle={toggleTodo} onRemove={removeTodo}/>
        </div>
    )
};
export default ToDo;