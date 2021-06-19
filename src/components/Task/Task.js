import './Task.css';

import Edit from '../../projects/EditTodo';
import {Link} from 'react-router-dom'

const Task = (props) => {    


const Task = (props) =>{    

    const classes = ['task'];
    if (props.todo.completed) {
      classes.push('done')
    }
    return (
      <div className={'task'}>
        <span className={classes.join(' ')}> 
          <input type='checkbox'onChange={()=> props.onChange(props.todo.id)}/>
          <div className={'id'}>{props.index}</div>
          <div>

            <div>
              <Link to={{
                pathname: `/todos/${props.todo.id}`,
                propsSearch: props,
                createChildren: props.createChildren,
                todos: props.todos,
                parentId: props.todo.id
              }}>{props.todo.name}</Link>
            </div>

            <div>{props.todo.name}</div>

            <div className={'description'}>{props.todo.description}</div>
          </div>
        </span>
        <button className={'close-button'} onClick={() => props.onRemove(props.todo.id)}>&times; </button>
      </div>
    )
};
export default Task;