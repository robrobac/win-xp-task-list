import React, { useState } from 'react'
import TaskForm from './TaskForm'
import Task from './Task';
import FilterButtons from './FilterButtons';
import DeleteDoneButton from './DeleteDoneButton';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    const filteredTasks = tasks.filter((task) => {
        if (filter === "all") {
            return true;
        } else if (filter === "done") {
            return task.status === true;
        } else if (filter === "active") {
            return task.status === false;
        }
        return false
    })

    const handleFilterClick = (filter) => {
        setFilter(filter);
    }

    const addTask = (task) => {
        if (!task.text) {
            return;
        }
        const newTasks = [task, ...tasks];
        setTasks(newTasks);
        console.log(task, ...tasks);
    }

    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id)
        setTasks(removeArr)
    }

    const removeDone = (status) => {
        const removeArr = tasks.filter(task => !task.status)
        setTasks(removeArr)
    }

    const checkTask = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return {...task, status: !task.status}
            }
            return task;
        })
        setTasks(updatedTasks)
    }

    return (
        <div>
            
            <h1>Task List</h1>
            <TaskForm onSubmit={addTask}/>
            <FilterButtons filter={filter} handleClick={handleFilterClick}/>
            <ul>
            <Task
            tasks={filteredTasks}
            removeTask={removeTask}
            checkTask={checkTask}
            />
            </ul>
            <DeleteDoneButton tasks={tasks} handleClick={removeDone}/>
            
        </div>
    )
}

export default TaskList
