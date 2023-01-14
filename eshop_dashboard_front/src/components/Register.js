import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
const Register = () => {
  const [name,setName] = useState("");
  const [email,setEmail]= useState("");
  const[password,setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("user-info")){
      navigate('/add')
    }
  },[])
  const  signUp =()=>{

    let items = {name,email,password};
    const url="http://localhost:8000/api/register";
    let result =  fetch(url,{
      method:'POST',
      body:JSON.stringify(items),
      headers:{
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      }
    })

    result = result.json()
    localStorage.setItem("user-info",JSON.stringify(result));
    

    // console.log(result);
  }
  return (
      <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100' value={name} onChange={(e)=>setName(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' size='lg' onClick={signUp}>Register</MDBBtn>
              {/* <Button onSubmit={signUp}>Reg</Button> */}

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  )
}

export default Register