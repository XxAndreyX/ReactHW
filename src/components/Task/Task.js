import './Task.css';

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
            <div>{props.todo.name}</div>
            <div className={'description'}>{props.todo.description}</div>
          </div>
        </span>
        <button className={'close-button'} onClick={() => props.onRemove(props.todo.id)}>&times; </button>
      </div>
    )
};
export default Task;