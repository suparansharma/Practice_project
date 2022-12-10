import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import UserForm from './Components/UserForm';

function App() {
  const [users,setUsers] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);

  //update
  const [selectedUser,setSelectedUser] = useState({
    title:'',
    body:''
  })

  const[updateFlag,setUpdateFlag] = useState(false);
  const url ="https://jsonplaceholder.typicode.com/posts";

  const getAllUsers = () =>{
    fetch(url)
    .then((res)=>{
      if(!res.ok){
        throw Error("could not fetch")
      }
      return res.json();
    })
    .then((data)=>{
      setUsers(data);
      console.log(data);
    })
    .catch((err)=>{
      setError(err.message);
    })
    .finally(()=>{
      setIsLoading(false)
    })
  }

  const handleDelete =(id)=>{
    const dltUrl = url +`/${id}`;
    console.log(dltUrl);
    fetch(url +`/${id}`,{
      method:'DELETE'
    })
    .then((res)=>{
      if(!res.ok){
        throw Error("could not delete")
      }
      getAllUsers();
    })

    .catch((err)=>{
      setError(err.message);
    })
  
  }
  useEffect(()=>{
    getAllUsers();
  },[])

  const addUser = (user) =>{
    fetch(url,{
      method:"POST",
      headers:{
        "Content-Type" :"application/json"
      },
      body:JSON.stringify(user)
    })

    .then((res)=>{
      if(res.status=== 201){
        // throw Error("could not created");
        getAllUsers();
      }else{
        throw new Error("could not create new user");
      }
     
    })

    .catch((err)=>{
      setError(err.message);
    })
  }

  const handleEdit = (id)=>{
    setUpdateFlag(true);
    const filteredData = users.filter((user)=> user.id===id);
    // console.log(filteredData);
    setSelectedUser({
      title:filteredData[0].title,
      body:filteredData[0].body
    })
  }


  return (
    <div className="App">
    <h1>User management App</h1>
    {isLoading && <h2>Loading</h2>}
    {error && <h2>{error}</h2>}
   


   {
    updateFlag ? ( <UserForm btnText="Update User" selectedUser={selectedUser} />)
    :( <UserForm btnText="Add User" handleSubmitData={addUser}/>)
   }



   <section>
   {users && users.map((user)=>{
      const {id,title,body} =user;
      return (
        <article className='card' key={id}>
          <p>{title}</p>
          <p>{body}</p>
          <button className='btn' onClick={()=>{handleEdit(id)}}>Edit</button>
          <button className='btn' onClick={()=>{handleDelete(id)}}>Delete</button>
        </article>
      )
    })}
   </section>
    </div>
  );
}

export default App;
