import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    // const id = useParams();
    const [user,setUser] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    const handleUpdateUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
    
        const updatedUser = { name, email };
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("success", data);
            alert('users added successfully');
            event.target.reset();
          });
      };
    return (
        <div>
            <h2>Update User: {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" id="" placeholder="Name" required />
        <br />
        <input type="email" name="email" id="" placeholder="Email" required />
        <br />
        <input type="submit" value="Update User" />
      </form>
        </div>
    );
};

export default UpdateUser;