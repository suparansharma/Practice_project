import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users,setUsers] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);
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
  return (
    <div className="App">
    <h1>User management App</h1>
    {isLoading && <h2>Loading</h2>}
    {error && <h2>{error}</h2>}

   <section>
   {users && users.map((user)=>{
      const {id,title,body} =user;
      return (
        <article className='card' key={id}>
          <p>{title}</p>
          <p>{body}</p>
          <button className='btn'>Edit</button>
          <button className='btn' onClick={()=>{handleDelete(id)}}>Delete</button>
        </article>
      )
    })}
   </section>
    </div>
  );
}

export default App;
