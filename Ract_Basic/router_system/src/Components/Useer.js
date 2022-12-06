import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Useer = () => {
    // const {id} = useParams()
    const[searchParams,setSearchParams] =useSearchParams();
    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    console.log(searchParams.get("id"));
    const handleSubmit =(e)=>{
        e.preventDefault()
        setSearchParams({name:name,age:age})
    }
    return (
        <div>
            <h1>User</h1>
            {/* <h2>{id}</h2> */}
{/* 
            <h2>{searchParams.get("id")}</h2>
            <h2>{searchParams.get("age")}</h2>
            <h2>{searchParams.get("name")}</h2> */}

            <form onSubmit={handleSubmit} >
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="name"/>
                <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder="age" />
                <button type="submit">For Search</button>
            </form>

        </div>
    );
};

export default Useer;