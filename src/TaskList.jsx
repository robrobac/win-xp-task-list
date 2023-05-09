import React, { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import Task from './components/Task';
import FilterButtons from './components/FilterButtons';
import DeleteDoneButton from './components/DeleteDoneButton';
import './TaskList.scss';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    

    useEffect(() => {
        const storedTasks = window.localStorage.getItem("storedtasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks))
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem("storedtasks", JSON.stringify(tasks))
    }, [tasks])

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
        <div className="window task-list" style={{height: 400 + "px", width: 300 + "px"}}>
            <div className="title-bar">
                <div className="title-bar-text">Task List</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body">
                <div>
                    <TaskForm onSubmit={addTask}/>
                    <FilterButtons filter={filter} handleClick={handleFilterClick}/>
                    <fieldset>
                        <legend>Tasks ({filter})</legend>
                        <ul>
                            <Task
                            tasks={filteredTasks}
                            removeTask={removeTask}
                            checkTask={checkTask}/>
                        </ul>
                    </fieldset>
                    <DeleteDoneButton tasks={tasks} handleClick={removeDone}/>
                </div>
            </div>
        </div>
    )
}

export default TaskList