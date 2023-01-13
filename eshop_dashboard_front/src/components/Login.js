import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const login=()=>{
    navigate('/add')
  }
  return (
    <div>
      <Button onClick={login} className='primary'>Login</Button>
    </div>
    
  )
}

export default Login