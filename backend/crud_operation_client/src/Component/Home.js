import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res =>res.json())
        .then(data =>{setUsers(data)});
    },[])

    const handleUserDelete=(id)=>{
        const preceed = window.confirm('Are you sure want to delete');
        if(preceed){
            console.log('deleting with user id,',id);
        }
    }
    return (
        <div>
            <h3>home</h3>
            
           <ul>
                {
                    users.map(user=>
                    <li key={user._id}>
                    {user.name}  {user.email  }
                    <button onClick={()=>handleUserDelete(user._id)}>x</button> 
                    </li>
                     
                
                    )
                }
            </ul>
        </div>
    );
};

export default Home;