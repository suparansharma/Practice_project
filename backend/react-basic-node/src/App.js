import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [users,setUsers] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/users')
    .then(res =>res.json())
    .then(data =>setUsers(data))
  },[])

  const handleAddUser = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = {name,email}
    console.log(name,email);

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(res =>res.json())
    .then(data =>
      {const newUsers = [...users,data];
      setUsers(newUsers);
      console.log(data)
      }
      )
  }
  return (
    <div className="App">
     <h1>My Own data: {users.length}</h1>
     <ul>
      {
        users.map(user => <li key={user.id}>{user.id} {user.name}</li>)
      }
     </ul>

     <form onSubmit={handleAddUser}>
      <input type="text" name="name" id="" placeholder='Name' required />
      <input type="text" name="email" id="" placeholder='Email'required />
      <input type="submit" value="Add user" />
     </form>
    </div>
  );
}

export default App;
