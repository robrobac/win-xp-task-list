import React, { useState } from 'react';

function TaskForm(props) {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            status: false,
        })
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Add Task'
                value={input}
                onChange={handleInputChange}></input>
            <button>Add Task</button>
        </form>
    )
}

export default TaskForm
