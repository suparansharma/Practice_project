import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function AuthUser(){

     const navigate = useNavigate();

     const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
     }


     const getUser = () =>{
        const userString = sessionStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
     }


    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    const saveToken = () =>{
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(token));
        setToken(token);
        setUser(user);
        navigate('/add');
    }
    const http = axios.create({
        baseURL :"http://localhost:8000/api",
        headers:{
            headers:{
                "Content-Type":"application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": `Bearer ${token}`
            }
        }
    });
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http
    }
}