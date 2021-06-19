import ChildrenTask from '../ChildrenTask/ChildrenTask.js';
import { useSelector } from 'react-redux';

const ChildrenTasks= (props) =>{
    const ch = useSelector(state => state.todos.filter(t => t.id === props.parentId));
    const tasks = ch[0].childrens;
    return (<div>
        {tasks.map((todo, index) => <ChildrenTask todo={todo} key={todo.id} index={index} createChildren={props.createChildren} onChange={props.onToggle} onRemove={props.onRemove} />)}
    </div>)
};
export default ChildrenTasks;