import React from 'react';

const ToDo = (props) => {
    return(
        <div className='todo-box'>
            <div>
                <input type='checkbox' checked={props.isComplete} onChange={()=>props.onCheckBox(props.idx)} />
            </div>
            <h1 className={props.isComplete ? "complete" : "notComplete"}>{props.description}</h1>
            <button onClick={()=>props.onDeleteHandler(props.idx)}>Delete</button>
        </div>
    )
}

export default ToDo;