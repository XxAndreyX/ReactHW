import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import './TaskAdd.css';

const AddTask = (props)=>{
    const [valueName, setValueName] = useState('');
    const [valueDescriptions, setValueDescription] = useState('');
    const dispatch = useDispatch();
    const addOneTask = props.onCreate;

    function submitHandler(e) {
        e.preventDefault();
         if (valueName.trim() || valueDescriptions.trim()) {
            dispatch({ type: 'ADD_TODO', name: valueName, description: valueDescriptions });
        }
    };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input value={valueName} onChange={e => setValueName(e.target.value)} placeholder='Input name taks'/>
                <input value={valueDescriptions} onChange={e => setValueDescription(e.target.value)} className={'input-description'} placeholder='Input description taks'/>
                <button type='submit' className={'button-add-name'}>Add task</button>
            </form>
        </div>
    )
}

export default AddTask;