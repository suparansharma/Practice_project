import React, { useEffect, useState } from 'react'
import AuthUser from '../AuthUser/AuthUser'

const UserProfile = () => {
    const {user,http} = AuthUser();
    const [userdetails,setUserdetails] = useState();
    
    useEffect(()=>{
        fetchUserDetails();
    })

    const fetchUserDetails = ()=>{
        http.post('/me')
        .then((res)=>{
            console.log(res.data)
        })
    }
  return (
    <div>UserProfile</div>
  )
}

export default UserProfile