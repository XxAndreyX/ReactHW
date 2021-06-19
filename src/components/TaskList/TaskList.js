import Task from '../Task/Task.js';

import { useSelector } from 'react-redux';

const Tasks = (props) =>{
    const tasks = useSelector(state => state.todos);
    return (
        <div>
            {tasks.map((todo, index) => <Task todo={todo} key={todo.id} todos={props.todos} index={index} createChildren={props.createChildren} onChange={props.onToggle} onRemove={props.onRemove} />)}
        </div>
    )


const Tasks = (props) =>{
    const tasks = props.tasks;
    console.log(tasks);
    return (<div>
        {tasks.map((todo, index) => <Task todo={todo} key={todo.id} index={index} onChange={props.onToggle} onRemove={props.onRemove} />)}
    </div>)
};
export default Tasks;