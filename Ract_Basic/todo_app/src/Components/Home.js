import React from 'react';
import Todos from './Todos';
import style from './home.module.css'
import NewTodo from './NewTodo';
const Home = () => {
    const dummyTodos = [
        {
            id:1,
            title:"todo title 1",
            desc:"todo1 description is here ...",
        },
        {
            id:2,
            title:"todo title 2",
            desc:"todo1 description is here ...",
        }
    ];
    return (
        <div className={style.container}>
            <h1 style={{ color:"white" }}>Todo App</h1>
            <NewTodo/>
            <Todos dummyTodos={dummyTodos}/>
        </div>
    );
};

export default Home;