import './ChildrenTask.css';
const ChildrenTask = (props) => {    

    const classes = ['task'];
    if (props.todo.completed) {
      classes.push('done')
    }
    return (
      <div className={'task'}>
          <div className={'id'}>{props.index}</div>
          <div>
          <div>{props.todo.name}</div>
            <div className={'description'}>{props.todo.description}</div>
          </div>
      </div>
    )
};
export default ChildrenTask;