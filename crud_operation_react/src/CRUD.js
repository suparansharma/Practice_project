import React, { useState } from 'react';
import './CRUD.css';
const CRUD = () => {

    const list =[
        {
            id:1,
            name:"HP",
            price:"222"
        },
        {
            id:2,
            name:"Dell",
            price:"2445"
        },
    ]

    const [lists,setList] = useState(list);

    return (
        <div className='crud'>
            <div>
            <AddList setList={setList}/>
            <table>
                {
                    lists.map((current)=>(
                        <tr>
                           <td>{current.name}</td> 
                           <td>{current.price}</td>
                           <td>
                            <button className='edit'>Edit</button>
                            <button className='delete'>Delete</button>
                            </td> 
                        </tr>
                    ))
                }
            </table>
            </div>
        </div>
    );
};

function AddList({setList}){
    function handleSubmit(event){
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const newList = {
            id:3,
            name,
            price
        }
        setList((prevList)=>{
            return prevList.concat(newList)
        })
    }
    return(
        <form className='addFrom' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Enter Name' id="" />
            <input type="text" name="price" placeholder='Enter Price' id="" />
            <button type="submit">Add</button>
        </form>
    )
}

export default CRUD;