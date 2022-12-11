import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user,setUser] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setUser(data))
    },[])


    const handleUpdateUser = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const UpdatedUser = {name,email}; 

        // send data to the surver
        const url = `http://localhost:5000/user/${id}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(UpdatedUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success',data)
            alert('user added successfully');
            event.target.reset();
        })
    }
    return (
        <div>
            <h3>Updating User :{id}</h3>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' placeholder='name' required />
                <br />
                <input type="text" name='email' placeholder='email' re />
                <br />
                <input type="submit" value="Add user" />
            </form>
        </div>
    );
};

export default UpdateUser;