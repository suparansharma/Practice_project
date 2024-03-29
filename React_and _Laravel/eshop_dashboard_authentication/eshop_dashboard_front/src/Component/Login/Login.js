import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthUser from '../AuthUser/AuthUser';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { http, setToken } = AuthUser()
  useEffect(() => {
    if (sessionStorage.getItem("user")) {

      navigate('/add')
    }
  }, [])


  const login = () => {
    let items = { email, password };
    // console.log(items);

    // let result = await fetch('http://localhost:8000/api/login',{
    //   method:"POST",
    //   headers:{
    //     'Content-Type': 'application/json',
    //     "Accept": 'application/json'
    //   },
    //   body: JSON.stringify(items),
    // })

    http.post('/login', { email: email, password: password })
      .then((res) => {
        // setToken(res.data.user,res.data.access_token);
        setToken(res?.data?.user, res?.data?.access_token);
        // console.log(res.data)
      })


    // result = await result.json();
    // localStorage.setItem("user-info",JSON.stringify(result));
    navigate('/add')

  }


  return (
    <div className='row justify-content-center pt-5'>
      <div className="col-sm-6">
        <div className="card p-4">



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
          <button type="submit" className="btn btn-primary mt-3" onClick={login}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login