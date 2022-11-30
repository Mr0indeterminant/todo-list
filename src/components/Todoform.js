import React from 'react'
import { useState } from 'react'
export default function Todoform(props) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask({
            id: Math.floor(Math.random() * 10000),
            text: input,
            isComplete: false
        });
        setInput('');
    }

    return (
        <form className='todo-form'>
            <input type="text" placeholder='Add a Todo' value={input} onChange={handleChange} className="todo-input" name="text" />
            <button type='submit' className='todo-btn' onClick={handleSubmit}>ADD TODO</button>
        </form>
    )
}
