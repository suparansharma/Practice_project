import React, { useState } from 'react';

const NewTodo = (props) => {
    const [todo,setTodo] = useState("");
    const handleInputChange = (event) =>{
        setTodo(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(todo);
        props.onTodo(todo);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="todo">New Todo:</label>
                <input type="text" name="todo" id="todo" value={todo} onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewTodo;