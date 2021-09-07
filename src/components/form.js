import React, { useState } from 'react';

const Form = (props) => {
    const [form,setForm] = useState('');

    const onChangeHandler = (event) => {
        setForm(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.setTodos([...props.todos,
            {
                description: form,
                isComplete: false
            }
        ])
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type='text' placeholder='Input New To-Do' onChange={onChangeHandler}/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Form