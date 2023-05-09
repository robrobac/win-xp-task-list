import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'

function Task({ tasks, removeTask, checkTask }) {
    
    return tasks.map((task) => (
        <li key={task.id} >
            <div onClick={() => checkTask(task.id)}>
            <input
            type='checkbox'
            checked={task.status}
            onChange={() => {}}/>
            <p>{task.text}</p>
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                onClick={() => removeTask(task.id)}
                />
            </div>
        </li>
    ))
}

export default Task
