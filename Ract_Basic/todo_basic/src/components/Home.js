import React, { useState } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';

const  dummytodos = ['todo1','todo2'];
const Home = () => {
    const [todos,setTodos] = useState(dummytodos);
const handleNewTodo = (newTodo) => {
    console.log(newTodo);
    setTodos([...todos,newTodo]);
}
    return (
        <div>
            <h1>this is home pages</h1>
            <NewTodo onTodo ={handleNewTodo}/>
           <Todos todos={todos} />
        </div>
    );
};

export default Home;