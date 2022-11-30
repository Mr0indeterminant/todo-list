import React, { useState } from 'react'
import Todoform from './Todoform';
import Todo from './Todo';
export default function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTask = task => {
        if (!task.text) {
            return
        }
        const newTodos = [task, ...todos];
        setTodos(newTodos);
    }

    const removeTask = id => {
        let updateTask = [...todos].filter(task => task.id !== id)
        setTodos(updateTask);
    }

    const completeTask = id => {
        let updateTask = todos.map(todo => {
            if (todo.id === id)
                todo.isComplete = true;
            return todo;
        })
        setTodos(updateTask);
    }

    return (
        <div>
            <Todoform addTask={addTask}></Todoform>
            <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} ></Todo>
        </div>
    )
}
