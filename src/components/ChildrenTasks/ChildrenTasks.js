import ChildrenTask from '../ChildrenTask/ChildrenTask.js';

const ChildrenTasks= (props) =>{
    const tasks = props.tasks;
    console.log(tasks);
    return (<div>
        {tasks.map((todo, index) => <ChildrenTask todo={todo} key={todo.id} index={index} createChildren={props.createChildren} onChange={props.onToggle} onRemove={props.onRemove} />)}
    </div>)
};
export default ChildrenTasks;