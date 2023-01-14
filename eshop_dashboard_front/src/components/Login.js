import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('"user-info"')){
      navigate('/add')
    }
  },[])

  
  return (
    <div>
      <Button  className='primary'>Login</Button>
    </div>
    
  )
}

export default Login