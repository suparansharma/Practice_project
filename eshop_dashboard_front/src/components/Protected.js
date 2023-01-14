import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let userInfo = localStorage.getItem("user-info");
        if(!userInfo){
            navigate('/register')
        }
    })


  return(
    <div>
        <Component/>
    </div>
  )
}

export default Protected