import React, {useState} from 'react';
import './AddChildreTask.css';
 
const AddChildreTask = (props)=>{
    const [valueName, setValueName] = useState('');
    const [valueDescriptions, setValueDescription] = useState('');
    const addOneTask = props.onCreate;
    const parentId = props.parentId;

    function submitHandler(e) {
        e.preventDefault();
        if (valueName.trim() || valueDescriptions.trim()) {
            props.onCreate(valueName, valueDescriptions, parentId);
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

export default AddChildreTask;