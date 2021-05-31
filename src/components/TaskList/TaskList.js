import Task from '../Task/Task.js';

const Tasks = (props) =>{
    const tasks = props.tasks;
    console.log(tasks);
    return (<div>
        {tasks.map((todo, index) => <Task todo={todo} key={todo.id} index={index} onChange={props.onToggle} onRemove={props.onRemove} />)}
    </div>)
};
export default Tasks;