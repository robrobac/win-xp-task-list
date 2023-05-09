import React from 'react'
import './Task.scss';

function Task({ tasks, removeTask, checkTask }) {
    
    return tasks.map((task) => (
        <li className='task-item' key={task.id} >
            <div onClick={() => checkTask(task.id)}>
                <input className='checkbox'
                type='checkbox'
                checked={task.status}
                onChange={() => {}}/>
                <label className='checkbox-label'>{task.text}</label>
            </div>

            <div class="title-bar-controls">
                <button aria-label="Close" onClick={() => removeTask(task.id)}></button>
            </div>
        </li>
    ))
}

export default Task
