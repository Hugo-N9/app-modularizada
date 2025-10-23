import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';
const TodoList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Aprender React', completed: false },
        { id: 2, text: 'Construir una app', completed: false },
        { id: 3, text: 'Modularizar el componente', completed: false }
    ]);

    const [inputValue, setInputValue] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        const newTask = {
            id: Date.now(),
            text: inputValue,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setInputValue('');
    };

    const handleToggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="todo-list-container">
            <h2>Mi Lista de Tareas</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className={task.completed ? 'completed' : ''}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleComplete(task.id)}
                        />
                        <span>{task.text}</span>
                        <button onClick={() => handleDeleteTask(task.id)} className='boton-eliminar'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg> Eliminar</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddTask} className='task-form'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="AÑADIR NUEVA TAREA"
                />
                <button type="submit">Añadir</button>
            </form>
        </div>
    );
};

export default TodoList;