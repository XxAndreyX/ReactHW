import ChildrenTasks from '../components/ChildrenTasks/ChildrenTasks.js';
import AddChildreTask from '../components/AddChildreTask/AddChildreTask.js';
import React, { useState } from 'react';
import store from '../AppStore';
import { Provider } from 'react-redux';
import '../App.css';

const EditTodo = (props) => { 
    const data = props?.location?.propsSearch;
    const createChildren = props?.location.createChildren;
    const tasks = data?.todo?.childrens;
    const [todos, setChildrenTodos] = useState(tasks);

    if (!data) {
        return(
            <div>
                
            </div>
        );
    }

    function addChildren(name, description) {
        setChildrenTodos(todos.concat([{
          id: todos.length - 1, 
          name,
          description,
          completed: false,
        }]))

        const todo = props.location.todos.find(todo => todo.id === props.location.parentId);
        todo.children = todos;
      };

    return (
      <Provider store={store}>
        <div className = 'App'>
           Children tasks
          <AddChildreTask onCreate = {addChildren} parentId={data.todo.id}/>
          <ChildrenTasks tasks={todos} onToggle={data.toggleTodo} parentId={data.todo.id} onRemove={data.removeTodo}/>
        </div>
      </Provider>
    )
};
export default EditTodo;