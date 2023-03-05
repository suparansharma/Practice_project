import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    let items = { name, email, password };
    const url = "http://localhost:8000/api/register";
    let result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(items),
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      }
    })

    result = await result.json()
    localStorage.setItem("user-info",JSON.stringify(result));
    navigate('/add')


    console.log("result", result);

    // console.log(items)
  }
  return (
    <div className='row justify-content-center pt-5'>
      <div className="col-sm-6">
        <div className="card p-4">

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />

          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3" onClick={signUp}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Register