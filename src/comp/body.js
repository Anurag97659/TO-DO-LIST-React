import React, { useState } from 'react';
import '../css/body.css';

function Body({ crossline, ondelete }) {
    const [data, setData] = useState('');
    const [tasks, setTasks] = useState([]);
   
    const submit = (e) => {
        e.preventDefault();
        if (!data.trim()) return; 
        const newTask = { id: Date.now(), text: data, completed: false };
        setTasks([...tasks, newTask]);
        setData('');
    };

    const handleCheckboxChange = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDelete = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };
    console.log(tasks);
    console.log(data);
    return (
        <div id='main'>
            <form onSubmit={submit} id='form'>
                <input
                    type="text"
                    id='input'
                    value={data}
                    onChange={(e) => setData(e.target.value)} 
                    placeholder='Work...'
                />
                <button type='submit' id='add'>Add</button>
            </form>
            <ul id='list'>
                {tasks.map((task) => (
                    <li key={task.id} id='option'>
                        <input
                            type="checkbox"
                            id="checkbox"
                            checked={task.completed}
                            onChange={() => handleCheckboxChange(task.id)}
                        />
                        <label
                            htmlFor="checkbox"
                            id="data"
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none'
                            }}
                        >
                            {task.text}
                        </label>
                        <button id="del" onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Body;
