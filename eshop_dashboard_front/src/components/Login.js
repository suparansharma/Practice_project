import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
  from 'mdb-react-ui-kit';

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  useEffect(() => {
    if (localStorage.getItem('"user-info"')) {
      navigate('/add')
    }
  }, [])


  const signIn = async () => {
    let items = {email,password};
    console.log(items);

    let result = await fetch('http://localhost:8000/api/login',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify(items),
    })
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result));
    navigate('/add')
    

  }

  return (
    <div >
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e)=>setEmail(e.target.value)}  />
        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e)=>setPassword(e.target.value)} />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn className="mb-4" onClick={signIn}>Sign in</MDBBtn>

      

      </MDBContainer>
    </div>

  )
}

export default Login
