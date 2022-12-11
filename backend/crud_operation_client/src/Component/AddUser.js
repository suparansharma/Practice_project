import React from 'react';

const AddUser = () => {

    const handleAddUser = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name,email}; 

        // send data to the surver

        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{console.log('success',data)})
    }
    return (
        <div>
            this is add user pages

            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='name' required />
                <br />
                <input type="text" name='email' placeholder='email' re />
                <br />
                <input type="submit" value="Add user" />
            </form>
        </div>
    );
};

export default AddUser;