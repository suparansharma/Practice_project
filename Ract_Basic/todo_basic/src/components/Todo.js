import React from 'react';
import NewTodo from './NewTodo';

const Todo = (props) => {

    return (
        <div>
            
            <p >{props.todo}</p>
        </div>
    );
};

export default Todo;