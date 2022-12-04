import React, { useRef, useState } from 'react';
import './Crud.css'
const Crurd = () => {

    

    const list = [
        {
            id:1,
            name:"name1",
            price:10
        },

        {
            id:2,
            name:"name2",
            price:20
        },

        {
            id:3,
            name:"name3",
            price:30
        }
    ]

    const [lists,setList] = useState(list);
    return (
        <div className='crud'>
            <div>
           <AddList setList={setList}/>
            <table>
                {
                    lists.map((currnet)=>(
                        <tr>
                            <td>{currnet.name}</td>
                            <td>{currnet.price}</td>
                            <td>
                            <button className='edit'>edit</button>
                            <button className='delete'>delete</button>
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
    const nameRef = useRef();
    const priceRef = useRef();
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
            return prevList.concat(newList);
        })
        nameRef.current.value = "";
        priceRef.current.value = "";
    }
    return (
        <div>
            <form className='addFrom' action="" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Name' id="" ref={nameRef} />
                <input type="text" name="price" placeholder='Price' id="" ref={priceRef} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default Crurd;